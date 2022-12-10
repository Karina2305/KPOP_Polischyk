abstract class ReferenceItem {
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

    abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
    constructor(public edition: number, title: string, year: number) {
        super(title, year);
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by department: ${ReferenceItem.department}`);
        console.log(`Edition: ${this.edition}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`); 
    }
}

let refBook: Encyclopedia = new Encyclopedia(1, "Encyclopedia", 2002);
refBook.printItem();
refBook.printCitation();

export {}