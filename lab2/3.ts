interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer(custName: string): void;
}

let favouriteAuthor: IAuthor = {
    name: "John Doe",
    email: "sth@lol.com",
    numBooksPublished: 14
}

let favouriteLibrarian: ILibrarian = {
    name: "John Doe",
    email: "sth@lol.com",
    department: "computir csaince",
    assistCustomer(custName: string): void {
        console.log("assist");
    }
}

export{IPerson, IAuthor, ILibrarian, favouriteAuthor, favouriteLibrarian}