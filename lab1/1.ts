// 1.1

function getAllWorkers() {
	
    let workers: Array<{name: string, surname: string, available: boolean, salary: number}> = [
		{name: 'Ivan', surname: 'Ivanko', available: true, salary: 1000},
		{name: 'Petro', surname: 'Petrenko', available: true, salary: 1500},
		{name: 'Vasyl', surname: 'Vasylenko', available: false, salary: 1600},
		{name: 'Taras', surname: 'Shevchenko', available: true, salary: 1300}
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