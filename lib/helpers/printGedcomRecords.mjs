export function printGedcomRecords(records, lvl=0){
    for(const record of records){
        // print string representation of pointer if present
        if(record.str) console.log("  ".repeat(lvl) + lvl + " " + record.type + " " + record.str);
        // print line string if present 
        else if(record.ptr) console.log("  ".repeat(lvl) + lvl + " " + record.type + " " + record.ptr);
        // print record type
        else console.log("  ".repeat(lvl) + lvl + " " + record.type);
        
        // recursive call for all substructures
        if(record.sub) printGedcomRecords(record.sub,lvl+1);
    }
}