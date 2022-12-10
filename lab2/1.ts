enum Category {BusinessAnalisyst, Developer, Designer, QA, ScrumMaster};

interface IWorker {
    id: number;
    name: string;
    surname: string;
    available: boolean;
    salary: number;
    category: Category;
}

function getAllWorkers(): IWorker[] {
    let workers = [
        {name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: Category.QA, id: 0},
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 1},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Developer, id: 2},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Designer, id: 3}
    ]

    return workers;
}

function getWorkerById(id: number): IWorker | undefined {
    let workers = getAllWorkers();
    let foundWorker = workers.find((worker) => {
        return worker.id === id;
    });

    return foundWorker;
}

function printWorker(worker: IWorker) {
    console.log(`${worker.name} ${worker.surname} got salary ${worker.salary}`);
}

printWorker(getWorkerById(3)!);

export{}