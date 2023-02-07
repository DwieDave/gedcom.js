const { parse, setHours, setMinutes, setSeconds, setMilliseconds } = require("date-fns");
const { dataTypes, dateDescriptions, calendarDescriptions } = require("../../util/Constants");
const Structure = require("../Structure");

// GedcomDate Class extends Structure to ensure export compatibility
module.exports = class GedcomDate extends Structure {
    // Startdate used for start of DateRanges (or DatePeriods) or as the only date for DateExact, etc.
    startDate = null;

    // Enddate used for the end of DateRanges (or DatePeriods)
    endDate = null;

    // descriptor is used to describe the type of date (e.g. FROM, TO, BET, etc.) with the Gedcom Tag
    descriptor = null;

    // description is a human readable description of the gedcomDescriptors meaning
    description = null;

    // calendar descriptor
    calendar = null;

    // epoch descriptor
    epoch = null;

    constructor(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef) {
        super(uri, level, xref, tag, lineVal, lineValType, EOL, substructures, datasetRef);
    }

    initDate() {
        // Convert LineVal to Date (+ Descriptor)
        this.handleDateValue();

        // Check Substructures for Time
        let time = this.getSubstructuresByTag(dataTypes.Time.toUpperCase(), false)[0]?.lineVal;
        if (time !== undefined) {
            // If Time is found, set the time
            const timeSplit = time.split(":");
            this.startDate = setHours(this.startDate, timeSplit[0]);
            this.startDate = setMinutes(this.startDate, timeSplit[1]);
            // Check if seconds (& milliseconds) are included
            if (timeSplit.length > 2) {
                const timeSecMs = timeSplit[2];
                // test if milliseconds are included
                if (timeSecMs.includes(".")) {
                    // Split seconds/ms at dot
                    const timeSecMsSplit = timeSecMs.split(".");
                    let sec = timeSecMsSplit[0];
                    let ms = timeSecMsSplit[1].replace("Z", "");
                    this.startDate = setSeconds(this.startDate, sec);
                    this.startDate = setMilliseconds(this.startDate, ms);
                } else {
                    this.startDate = setSeconds(this.startDate, timeSecMs);
                }
            }
        }
    }

    handleDateValue() {
        // Get all single description Tags for checking in switch
        const descriptionTags = Object.keys(dateDescriptions).filter((el) => (el !== "FROM" && el !== "BET"));

        let line = this.lineVal;

        switch (true) {
            // Case: dateRange: DateValue contains a "BET" and a "AND" tag
            case line.includes("BET")
                && line.includes("AND"):
                // Split the lineVal into two trimmed date Strings
                let dates = line.replace("BET", "").split("AND");
                dates = dates.map((date) => date.trim());
                // Parse the dates and set the descriptions
                this.descriptor = "BET";
                this.description = dateDescriptions.BET;

                const endDate = this.extractCalendarAndEpoch(dates[1]);
                const startDate = this.extractCalendarAndEpoch(dates[0]);

                this.startDate = this.parseDateFromLineVal(startDate);
                this.endDate = this.parseDateFromLineVal(endDate);
                break;

            // Case: DateValue contains a single description tag
            case descriptionTags.some(el => line.includes(el)):
                // Split the lineVal into the description tag and the date
                let lineSpl = line.split(" ");
                const gedcomTag = lineSpl[0];
                lineSpl.splice(0, 1);
                const dateStr = this.extractCalendarAndEpoch(lineSpl.join(" "));

                // Parse the date and set the description
                this.startDate = this.parseDateFromLineVal(dateStr);
                this.descriptor = gedcomTag;
                this.description = dateDescriptions[gedcomTag];
                break;

            // Case: DatePeriod contains a "FROM" and a "TO" tag
            case line.includes("FROM")
                && line.includes("TO"):
                this.lineValType = dataTypes.DatePeriod;
                this.handleDatePeriod();
                break;

            // Case: LineVal does not contain a description tag: parsed as regular Date
            default:
                this.startDate = this.parseDateFromLineVal(line);
                break;
        }
    }

    extractCalendarAndEpoch(linevalue) {
        const calendarTags = Object.keys(calendarDescriptions);
        const calendarTagExists = calendarTags.some(el => linevalue.includes(el));
        const epochTagExists = linevalue.includes("BCE");
        let line = linevalue
        if (epochTagExists) {
            this.epoch = "BCE";
            line = line.replaceAll("BCE", "").trim();
        }
        if (calendarTagExists) {
            // Split the lineVal into the calendar tag and the date
            let lineSpl = line.split(" ");
            const calendarTag = lineSpl[0];
            this.calendar = calendarTag;
            // remove the calendar tag from the lineSplit
            lineSpl.splice(0, 1);
            line = lineSpl.join(" ");
        }
        return line;
    }

    handleDatePeriod() {
        let dates = this.lineVal.replace("FROM", "").split("TO");
        dates = dates.map((date) => date.trim());
        // Parse the dates
        this.startDate = this.parseDateFromLineVal(dates[0]);
        this.endDate = this.parseDateFromLineVal(dates[1]);
        this.descriptor = "FROM";
        this.description = dateDescriptions.FROM;
    }

    parseDateFromLineVal(dateLine) {
        // split the dateLine into components by space
        let dateComponents = dateLine.split(" ");
        // check if dateLine is a single year or has more components
        // and set the parseFormat accordingly
        let parseFormat = "d LLL y";
        if (dateComponents.length === 1) {
            parseFormat = "y";
        } else if (dateComponents.length === 2) {
            parseFormat = "LLL y"
        };
        return parse(dateLine, parseFormat, new Date());
    }

    // public method to get the date as an object with a descriptor (in case of a special date)
    getDateObject() {
        // Determine if the date is a single date or a date range
        const multiDate = this.startDate !== null && this.endDate !== null;
        
        let result = {
            type: this.lineValType,
        };

        // add properties to the result object depending on the type of date
        if (multiDate) {
            result.startDate = this.startDate;
            result.endDate = this.endDate;
        } else {
            result.date = this.startDate;
        }

        // add the remaining properties to the result object if they are not null
        if (this.descriptor !== null)
            result.descriptor = this.descriptor;

        if (this.description !== null)
            result.description = this.description;

        if (this.calendar !== null)
            result.calendar = this.calendar;

        if (this.epoch !== null)
            result.epoch = this.epoch;

        return result;
    }
}