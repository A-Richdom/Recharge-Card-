let tableDisplay = document.getElementById('tableDisplay')
let chooseAmount = document.getElementById('chooseAmount')
// let getRandom = document.getElementById('getRandom')
let generatePinInput = document.getElementById("generatePinInput");
let chooseNetwork = document.getElementById('chooseNetwork')
let rechargeInput = document.getElementById('rechargeInput')
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yy = today.getFullYear();
let data = [];


function getRandom() {
    return Math.floor(Math.random() * 10000000000)
}

function generatePin() {
    let printRef;
    
    generatePinInput.value = getRandom();

    
    if (chooseNetwork.value == "airtel") {
			printRef = `*126*${generatePinInput.value}#`;
		}
    
    if (chooseNetwork.value == "mtn") {
        printRef = `*555*${generatePinInput.value}#`
    }
    
    if (chooseNetwork.value == "glo") {
        printRef = `*123*${generatePinInput.value}#`
    }
    
    if (chooseNetwork.value == "etisalat") {
        printRef = `*222*${generatePinInput.value}#`
    }

    rechargeData = { network:chooseNetwork.value, amount:chooseAmount.value, pin:generatePinInput.value, printRef:printRef, date:(dd + '/' + mm + '/' + yy), status:false }
    
    data.push(rechargeData)
}

function savePin() {
    tableDisplay.innerHTML = "";
    data.forEach(function(element, index){ 
        tableDisplay.innerHTML += `<tbody>
						<tr>
							<th scope='row'>${index + 1}</th>
							<td>${element.network}</td>
							<td>${element.amount}</td>
							<td>${element.pin}</td>
							<td>${element.printRef}</td>
							<td>${element.date}</td>
							<td>${
								element.status == false
									? `<span>UNUSED</span>`
									: `<span>USED</span>`
							}</td>
							<td><button class="bg-danger" onclick="Del()">DELETE</button></td>
						</tr>
					</tbody>`;
        
    });
            console.log(savePin);

}

function Del(index) {
    data.splice(index, 1)
    savePin()
}

function rechargeCard() {
    rechargeInput.value = ''
    if (rechargeInput.value = ` *555* ${generatePinInptut.value}`) {
        alert('yes valid')
        
    }
}