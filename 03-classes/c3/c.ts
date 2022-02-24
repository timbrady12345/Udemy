class Dustomer {
  //properties
  private _first: string;
  private _last: string;
  //constructors
  constructor(theFirst: string, theLast: string){
    this._first = theFirst;
    this._last = theLast;
  }

  public get firstname(): string{
    return this._first;
  }
  public set firstname(value: string){
    this._first = value;
  }

  public get lastname(): string{
    return this._last;
  }
  public set lastname(value: string){
    this._last = value;
  }

}
  let myDustomer = new Dustomer("Tim", "Brady");
  console.log(myDustomer.firstname);
  console.log(myDustomer.lastname);