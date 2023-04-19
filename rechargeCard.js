let tableDisplay = document.getElementById("tableDisplay");
let chooseAmount = document.getElementById("chooseAmount");
// let getRandom = document.getElementById('getRandom')
let generatePinInput = document.getElementById("generatePinInput");
let chooseNetwork = document.getElementById("chooseNetwork");
let rechargeInput = document.getElementById("rechargeInput");

let provider = {
	MTN: "*555*",
	GLO: "*123",
	AIRTEL: "*126*",
	ETISALAT: "*222*",
};
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yy = today.getFullYear();
let data = [];


// TO GET RANDOM NUMBER
function getRandom() {
	return Math.floor(Math.random() * 10000000000);
}

// TO GENERATE PIN
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

// TO SAVE PIN TO THE BELOW TABLE
function savePin() {
	if (generatePinInput.value == "") {
		tableDisplay.innerHTML = "";
		alert("You have Nothing to Save");
		return;
	}

    let rechargeData = {
        network: chooseNetwork.value,
        amount: chooseAmount.value,
        pin: generatePinInput.value,
        printRef: `${provider[chooseNetwork.value]}${generatePinInput.value}#`,
		date: dd + "/" + mm + "/" + yy,
		status: false,
	};

	data.push(rechargeData);

	display();
}

// TO DELETE EACH ROW
function Del(index) {
	data.splice(index, 1);
	display();
}

// TO RECHARGE CARD
function rechargeCard() {
	if (!rechargeInput.value) {
		alert("Input Recharge Card");
		// staticBackdrop.innerHTML
	}

	let findCard = data.find((elem) => elem.printRef === rechargeInput.value);
	// if (!findCard) return
	// staticBackdrop.innerHTML;
	// alert('invalid card')
	// if (!printRef == rechargeInput.value) {
	//     alert("Invalid Card");
	//     return
	// 	}

	data.forEach((elem) => {
		if (elem.printRef === rechargeInput.value) {
			if (findCard.status) {
				alert("Card has already been used by you");
			} else {
				findCard.status = true;
				display();
				alert("Card Load Successsfully");
			}
		} else if (!elem.printRef === !rechargeInput.value) {
			alert("invalid Pin");
			return;
		}
	});
}
