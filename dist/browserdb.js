var browserdb = (function () {
    function browserdb(table, mode) {
        this.table = table;
        if (mode)
            this.mode = window.sessionStorage;
        else
            this.mode = window.localStorage;
        this.mode.setItem(this.table, this.mode.getItem(table) || "[]");
    }
    browserdb.prototype.all = function () {
        return JSON.parse(this.mode.getItem(this.table));
    };
    browserdb.prototype.get = function (n) {
        var rows = this.all();
        return rows[n ^ 0] || undefined;
    };
    browserdb.prototype.post = function (value) {
        var newTable = this.all();
        newTable.push(value);
        this.replaceAll(newTable);
    };
    browserdb.prototype.remove = function (n) {
        var newTable = this.all();
        newTable.splice(n, 1);
        this.replaceAll(newTable);
    };
    browserdb.prototype.removeAll = function () {
        this.mode.setItem(this.table, "[]");
    };
    browserdb.prototype.destroy = function () {
        this.mode.removeItem(this.table);
    };
    browserdb.prototype.replaceAll = function (value) {
        this.mode.setItem(this.table, JSON.stringify(value));
    };
    return browserdb;
}());
