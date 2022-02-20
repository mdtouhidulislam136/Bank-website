// handle deposite button event

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    

    depositTotal.innerText = newDepositTotal;

    // update account balance

    const balanceTotal = document.getElementById('balance-total');
    
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;


    //clear the deposit input field

    depositInput.value = '';

});

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input'); 

    const newWithdrawAmount = parseFloat(withdrawInput.value);

    const withdrawTotal = document.getElementById('withdraw');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);


    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;


    withdrawTotal.innerText = newWithdrawTotal;

    // update balance

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceTotal = parseFloat(balanceTotal.innerText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input field

    withdrawInput.value = '';





})