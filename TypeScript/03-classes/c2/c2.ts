class Bustomer {
  private _first: string;
  private _last: string;

  get firstName(): string{
    return this._first;
  }

  set firstName(value: string){
    this._first = value;
  }
}