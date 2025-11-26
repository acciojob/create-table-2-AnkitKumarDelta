function createTable() {
	
    let rn = Number(prompt("Input number of rows"));
	let cn = Number(prompt("Input number of columns"));

	let table = document.createElement('table');
	table.id = "myTable"
	for(let i=0;i<rn;i++){
		let tr = document.createElement('tr');
		tr.id = "myTable tr"
		for(let j=0;j<cn;j++){
			let td = document.createElement('td');
			td.id = "myTable td"
			td.innerText = `Row-${i} Column-${j}`;
			tr.append(td);
		}		
		table.append(tr);
	}
	document.body.append(table);
}
