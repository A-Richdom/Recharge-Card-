let tableDisplay = document.getElementById("tableDisplay");
let chooseAmount = document.getElementById("chooseAmount");
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

let data = JSON.parse(localStorage.getItem("rechargeData"))
// data.push(JSON.parse(localStorage.getItem("rechargeData")));

// TO GET RANDOM NUMBER
function getRandom() {
	return Math.floor(Math.random() * 10000000000);
}

// TO GENERATE PIN
function generatePin() {
	if (!chooseAmount.value || !chooseNetwork.value) {
		alert("Fill in the boxes above");
	} else {
		generatePinInput.value = getRandom();
	}
}

function display() {
	tableDisplay.innerHTML = "";
	const dataFromStorage = JSON.parse(localStorage.getItem("rechargeData"));
	
	
		dataFromStorage.forEach((element, index) => {
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

display();
// TO SAVE PIN TO THE BELOW TABLE
function savePin() {
	if (generatePinInput.value == "") {
		alert("You have Nothing to Save");
	} else {
		let rechargeData = {
			network: chooseNetwork.value,
			amount: chooseAmount.value,
			pin: generatePinInput.value,
			printRef: `${provider[chooseNetwork.value]}${generatePinInput.value}#`,
			date: dd + "/" + mm + "/" + yy,
			status: false,
		};

		data.push(rechargeData);
		localStorage.setItem("rechargeData", JSON.stringify(data));
		generatePinInput.value = "";
		chooseAmount.value = "";
		chooseNetwork.value = "";

		display();
	}
}

// TO DELETE EACH ROW
function Del(index) {
	data.splice(index, 1);
	display();
	
}

// TO RECHARGE CARD
function rechargeCard() {
	if (!rechargeInput.value) {
		alert("Input Recharge Code");
	}

	let dataFromStorage = JSON.parse(localStorage.getItem("rechargeData"));

	const codeExist = dataFromStorage.filter(
		(item) => item.printRef === rechargeInput.value
	);

	console.log(codeExist);

	if (codeExist.length > 0) {
		dataFromStorage.forEach((elem) => {
			if (elem.printRef === rechargeInput.value) {
				if (elem.status) {
					alert("Card has already been used by you");
				} else {
					elem.status = true;
					alert("Card Load Successsfully");
				}
			}
		});
	} else {
		alert("invalid Pin");
		return;
	}

	localStorage.setItem("rechargeData", JSON.stringify(dataFromStorage));
	display();
}
