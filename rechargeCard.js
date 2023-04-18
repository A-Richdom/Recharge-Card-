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

// to get random number
function getRandom() {
    return Math.floor(Math.random() * 10000000000)
}

// to generate pin
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

// to save pin to the table below
function savePin() {
    tableDisplay.innerHTML = "";
    data.forEach(function(element, index){ 
        tableDisplay.innerHTML += `<tr>
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
							<td><button class="bg-danger" onclick="Del(${index})">DELETE</button></td>
						</tr>`;
        
    });
      
		}
            console.log(savePin)

// to delete each row
function Del(index) {
    data.splice(index, 1)
    savePin();
}

// to recharge card
function rechargeCard() {

    rechargeInput.value = ''
     if (chooseNetwork.value == "airtel") {
         alert("Recharge Successful");
         rechargeInput.value = ` *126${generatePinInput.value}`
    }
     else if (chooseNetwork.value == "mtn") {
         alert("Recharge Successful");
		 rechargeInput.value = ` *555*${generatePinInput.value}`;
		}
     else if (chooseNetwork.value == "glo") {
         alert("Recharge Successful");
		 rechargeInput.value = ` *123*${generatePinInput.value}`;
		}
     else if (chooseNetwork.value == "etisalat") {
         alert("Recharge Successful");
		 rechargeInput.value = ` *222*${generatePinInput.value}`;
		}
    console.log(rechargeCard);
}