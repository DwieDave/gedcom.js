export class Structure {
    constructor(tag, ptr, str, ext) {
        this.type = tag in ext ? ext[tag] : tag;
        if (ptr) this.ptr = ptr;
        if (str) this.str = str;
        this.sub = [];
    }

    fixPtrs(ids) {
        if (this.ptr && this.ptr in ids) this.ptr = ids[this.ptr];
        this.sub.forEach(x => x.fixPtrs(ids));
        if (this.sub.length == 0) delete this.sub; // remove if empty
    }

    removePtrs() {
        if (this.ptr) delete this.ptr;
        if (this.sub?.length > 0) this.sub.forEach(x => x.removePtrs()); // remove ptrs
    }
}