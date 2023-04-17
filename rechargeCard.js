let display = document.getElementById('display')
let amountRecharge = document.getElementById('amountRecharge')
// let getRandom = document.getElementById('getRandom')
let generatePinInput = document.getElementById("generatePinInput");
let chooseNetwork = document.getElementById('chooseNetwork')
let rechargeInput = document.getElementById('rechargeInput')

let data = []


function getRandom() {
    return Math.floor(Math.random() * 10000000000)
}

function generatePin(){
     generatePinInput.value = getRandom();
}
function rechargeCard() {
    rechargeInput.value = ''
    if (rechargeInput.value = ` *555* ${generatePinInput.value}#`) {
        alert('yes valid')
        
    }
}