import {ILibrarian} from './3'

class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favouriteLibrarian: ILibrarian = new UniversityLibrarian()

favouriteLibrarian.name = "John"
favouriteLibrarian.assistCustomer("Me")

export{}



                                                