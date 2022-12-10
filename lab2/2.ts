enum Category {BusinessAnalisyst, Developer, Designer, QA, ScrumMaster};

interface IPriceLogger {
    (prize: string): void;
}

interface IWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
    markPrize: IPriceLogger;
}

let logPrize: IPriceLogger = (prize: string): void => {
    console.log(prize);
}

logPrize("1234");

export{}