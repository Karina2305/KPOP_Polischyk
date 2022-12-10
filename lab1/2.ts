// 1.2

enum Category{
	BusinessAnalyst = `Business analyst`,
	Developer = `Developer`,
	Designer = `Designer`,
	QA = `QA`,
	ScrumMaster = `Scrum master`
}

function getAllWorkers() {
	
	let workers: Array<{name: string, surname: string, category: Category, available: boolean, salary: number}> = [
		{name: 'Ivan', surname: 'Ivanko', category: Category.Developer, available: true, salary: 1000},
		{name: 'Pylyp', surname: 'Bondar', category: Category.Developer, available: true, salary: 1100},
		{name: 'Petro', surname: 'Petrenko', category: Category.Designer, available: true, salary: 1500},
		{name: 'Oleksii', surname: 'Melchenko', category: Category.BusinessAnalyst, available: false, salary: 2100},
		{name: 'Vasyl', surname: 'Vasylenko', category: Category.Designer, available: false, salary: 1600},
		{name: 'Olena', surname: 'Karpeno', category: Category.QA, available: true, salary: 1800},
		{name: 'Iana', surname: 'Mikhno', category: Category.QA, available: true, salary: 2100},
		{name: 'Mykhaylo', surname: 'Tkach', category: Category.QA, available: true, salary: 1900},
		{name: 'Taras', surname: 'Shevchenko', category: Category.ScrumMaster, available: true, salary: 1300}
	];
	
	return workers;
}

let workers: Array<any> = getAllWorkers();
console.log(workers);

function logFirstAvailable (workers: Array<any>): void{
	
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

function getWorkersNamesByCategory (category: Category): Array<string>{
	
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
