import { Shape } from "./c";

export class Circle extends Shape{
  constructor(_x: number, _y: number, private _r: number){
    super(_x, _y);
  }

  public get r(): number{
    return this._r;
  }
  public set r(value: number){
    this._r = value;
  }

  getInfo(): string{
    return super.getInfo() + ` and also ${this.r} is r :)`;
  }
}