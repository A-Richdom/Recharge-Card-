let tableDisplay = document.getElementById("tableDisplay");
let chooseAmount = document.getElementById("chooseAmount");
// let getRandom = document.getElementById('getRandom')
let generatePinInput = document.getElementById("generatePinInput");
let chooseNetwork = document.getElementById("chooseNetwork");
let rechargeInput = document.getElementById("rechargeInput");
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yy = today.getFullYear();
let data = [];

// to get random number
function getRandom() {
	return Math.floor(Math.random() * 10000000000);
}

// to generate pin
function generatePin() {
	generatePinInput.value = getRandom();
}

function display() {
	tableDisplay.innerHTML = "";
	data.forEach(function (element, index) {
		tableDisplay.innerHTML += `<tr>
							<th scope='row'>${index + 1}</th>
							<td>${element.network}</td>
							<td>${element.amount}</td>
							<td>${element.pin}</td>
							<td>${element.printRef}</td>
							<td>${element.date}</td>
							<td>${!element.status ? `<span>UNUSED</span>` : `<span>USED</span>`}</td>
							<td><button class="bg-danger" onclick="Del(${index})">DELETE</button></td>
						</tr>`;
	});
}

// to save pin to the table below
function savePin() {
	let printRef;
	if (chooseNetwork.value == "airtel") {
		printRef = `*126*${generatePinInput.value}#`;
	}

	if (chooseNetwork.value == "mtn") {
		printRef = `*555*${generatePinInput.value}#`;
	}

	if (chooseNetwork.value == "glo") {
		printRef = `*123*${generatePinInput.value}#`;
	}

	if (chooseNetwork.value == "etisalat") {
		printRef = `*222*${generatePinInput.value}#`;
	}

	let rechargeData = {
		network: chooseNetwork.value,
		amount: chooseAmount.value,
		pin: generatePinInput.value,
		printRef: printRef,
		date: dd + "/" + mm + "/" + yy,
		status: false,
	};

	data.push(rechargeData);

	display();

	// if (rechargeInput.value == ` *126${generatePinInput.value}`) {
	// 		alert("tsjhssjssj");
	// 	}
}
console.log(savePin);

// to delete each row
function Del(index) {
	data.splice(index, 1);
	display();
}

// to recharge card
function rechargeCard() {
	if (!rechargeInput.value) {
		alert("input someting");
	}

	let findCard = data.find((elem) => elem.pin === generatePinInput.value);
	// console.log(find, 'this is the card u wanna load');
	data.forEach((elem) => {
		if (elem.printRef === rechargeInput.value) {
			if (findCard.status) {
				alert("card as alredy been use");
			} else {
				findCard.status = true;
			}
		} else {
			alert("invalid card");
		}
	});
	display();
	// findCard.status = true;
	// if (findCard.status) {
	// 	alert("card as alredy been use");
	// } else {

	// }

	console.log(data);
}
