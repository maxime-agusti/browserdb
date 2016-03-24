class browserdb {

  public mode;

  public constructor (public table : string, mode? : boolean) {

    if (mode) this.mode = window.sessionStorage;
    else      this.mode = window.localStorage;

    this.mode.setItem(this.table, this.mode.getItem(table) || "[]");
  }

  public all () : Array<any> {

    return JSON.parse(this.mode.getItem(this.table));
  }

  public get (n? : number) : any {

    var rows = this.all();

    return rows[n ^ 0] || undefined;
  }

  public post (value) : void {

    var newTable = this.all();
    newTable.push(value);

    this.replaceAll(newTable);
  }

  public remove (n : number) : void {

    var newTable = this.all();
    newTable.splice(n, 1);

    this.replaceAll(newTable);
  }

  public removeAll () : void {

    this.mode.setItem(this.table, "[]");
  }

  public destroy () : void {

    this.mode.removeItem(this.table);
  }

  public replaceAll (value : Array<any>) {

    this.mode.setItem(this.table, JSON.stringify(value));
  }
}
