import { ReferenceItem } from "./5";

class Encyclopedia extends ReferenceItem {
    constructor(public edition: number, title: string, year: number) {
        super(title, year);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition}`);
    }
}

let refBook: Encyclopedia = new Encyclopedia(1, "Encyclopedia", 2002);
refBook.printItem();

export {}

