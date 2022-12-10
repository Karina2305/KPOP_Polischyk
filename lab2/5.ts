class ReferenceItem {
    /*title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log('Creating new ReferenceItem...');
    }*/

    private _publisher: string;
    static department: string = "Default value";

    constructor(public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...');
    }

    get publisher() {
        let upper: string = this._publisher.toUpperCase();
        return upper;
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem.department}`);
    }

    /*printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
    }*/
}

let ref: ReferenceItem = new ReferenceItem("The best book", 1969);
ref.printItem();

ref.publisher = "Abba";
console.log(ref.publisher);
 
export{ReferenceItem}