// 1.5

enum Category{
	BusinessAnalyst = `Business analyst`,
	Developer = `Developer`,
	Designer = `Designer`,
	QA = `QA`,
	ScrumMaster = `Scrum master`
}

function getAllWorkers() {
	
	let workers: Array<{id: number, name: string, surname: string, category: Category, available: boolean, salary: number}> = [
		{id: 1, name: 'Ivan', surname: 'Ivanko', category: Category.Developer, available: true, salary: 1000},
		{id: 2, name: 'Pylyp', surname: 'Bondar', category: Category.Developer, available: true, salary: 1100},
		{id: 3, name: 'Petro', surname: 'Petrenko', category: Category.Designer, available: true, salary: 1500},
		{id: 4, name: 'Oleksii', surname: 'Melchenko', category: Category.BusinessAnalyst, available: false, salary: 2100},
		{id: 5, name: 'Vasyl', surname: 'Vasylenko', category: Category.Designer, available: false, salary: 1600},
		{id: 6, name: 'Olena', surname: 'Karpenko', category: Category.QA, available: true, salary: 1800},
		{id: 7, name: 'Iana', surname: 'Mikhno', category: Category.QA, available: true, salary: 2100},
		{id: 8, name: 'Mykhaylo', surname: 'Tkach', category: Category.QA, available: true, salary: 1900},
		{id: 9, name: 'Taras', surname: 'Shevchenko', category: Category.ScrumMaster, available: true, salary: 1300}
	];
	
	return workers;
}

let workers: Array<any> = getAllWorkers();
console.log(workers);

function logFirstAvailable (workers: Array<any> = getAllWorkers()): void{
	
	const length: number = workers.length;
	console.log(length);

	for(let w of workers){
		if(w.available){
			const name: typeof w.name = w.name;
			const surname: typeof w.name = w.surname;
			console.log(`${name} ${surname}`);
			break;
		}
	}
}

logFirstAvailable(workers);

function getWorkersNamesByCategory (category: Category = Category.Designer): Array<string>{
	
	let workers: Array<any> = getAllWorkers();
	let workersByCategory: Array<string> = [];
	
	for(let w of workers){
		if(w.category === category){
			workersByCategory.push(w.surname);
		}
	}

	return workersByCategory;
}

function logWorkersNames (workersList: string[]): void{
	
	for(let w of workersList){
		console.log(w);
	}
}

for(let c in Category){
	
	const category: Category = Category[c as keyof typeof Category];
	console.log(`==== ${category} ====`);
	logWorkersNames(getWorkersNamesByCategory(category));
}

const getDevelopersNames = (workers: Array<any>): void => {
	
	console.log(`==== Developers:`);
	
	workers.forEach(w => { 
		if(w.category  ===  Category.Developer){
			console.log(`${w.name} ${w.surname}`);
		}
	});
}

getDevelopersNames(workers);

const getWorkerByID = (ID: number) : [string, string, number, boolean] => {
	
	let workerData : [string, string, number, boolean];
	
	let workers: Array<any> = getAllWorkers();
	const foundWorker = workers.find(w => w.id  ===  ID);
	
	workerData = [foundWorker.name, foundWorker.surname, foundWorker.salary, foundWorker.available];
	
	return workerData;
}

let id: number = Math.floor(Math.random() * 9) + 1;
console.log(`ID: ${id}\n${JSON.stringify(getWorkerByID(id))}`);


function createCustomer (name: string, age?: number, city?: string): string{
	
	let customer: string = `${name}`;

	if(age!== undefined){
		customer+=`, ${age} year(s) old`;
	}
	if(city!== undefined){
		customer+=`, lives in ${city} city`;
	}

	console.log(customer);

	return customer;
}

createCustomer(`Artem`);
createCustomer(`Artem`, 24);
createCustomer(`Artem`, 24, `Kyiv`);

console.log(`==== Designers:`);
logWorkersNames(getWorkersNamesByCategory());

logFirstAvailable();

function checkoutWorkers (customer: string, ...workerIDs: number[] ): string[]{

	let availableWorkers: string[] = [];
	
	console.log(`Customer: ${customer}`);
	console.log(`Workers available:`);

	for(let id of workerIDs){

		const worker: [unknown, unknown, unknown, unknown] = getWorkerByID(id);
		
		if(worker[3]){
			availableWorkers.push(`${worker[0]} ${worker[1]}`);
		}
	}

	return availableWorkers;
}

const customer: string = createCustomer(`Valerii`, 42, `Ternopil`);
logWorkersNames(checkoutWorkers(customer,3,5,7,1,4,9));

const myWorkers: string[] = checkoutWorkers(`Ann`, 1, 2, 4);
logWorkersNames(myWorkers);