// 1.4

function createCustomerID(name: string, id: number): string  {
	
	return name+id;
}

let myID: string = createCustomerID(`Ann`, 10);
console.log(myID);

let IdGenerator: typeof createCustomerID = (name: string, id: number) => name+id;

IdGenerator = createCustomerID;
console.log(IdGenerator(`Artem`, 777));
