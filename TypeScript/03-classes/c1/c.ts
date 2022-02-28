class Customer {
  //properties
  private firstname: string;
  private lastname: string;
  //constructors
  constructor(theFirst: string, theLast: string){
    this.firstname = theFirst;
    this.lastname = theLast;
  }

  public getFirstName(): string{
    return this.firstname;
  }
  public getLastName(): string{
    return this.lastname;
  }

  public setFirstName(theFirst: string): void {
    this.firstname = theFirst;
  }
  public setLastName(theLast: string): void {
    this.lastname = theLast;
  }

}
  let myCustomer = new Customer("Tim", "Brady");
  console.log(myCustomer.getFirstName());
  console.log(myCustomer.getLastName());