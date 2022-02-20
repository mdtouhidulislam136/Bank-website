
function getInputValue(id){
const inputField = document.getElementById(id);
const inputAmount = parseFloat(inputField.value);
return inputAmount;

}

function updateTotal(fieldId, amount){
    const totalTag = document.getElementById(fieldId);
    const totalTagValue = parseFloat(totalTag.innerText);
    const previousAmount = totalTagValue + amount;
    totalTag.innerText = previousAmount;


}

function balanceTotal(amount, isAdding){
    const balanceTag = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTag.innerText);
    let newBalance;
    if(isAdding == true){
         newBalance = previousBalance + amount;
    }

    else{
         newBalance = previousBalance - amount;
    }
    

    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
 const amount = getInputValue('deposit-input');

 updateTotal('deposit-total', amount);
 balanceTotal(amount, true);


});

document.getElementById('withdraw-button').addEventListener('click', function(){

    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw', amount);
    balanceTotal(amount, false);
});


