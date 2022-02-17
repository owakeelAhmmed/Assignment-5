

document.getElementById('calc-btn').addEventListener('click', function(){
    const totalIncome = document.getElementById('income-input');
    const totalAmount = totalIncome.value;
    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;
    const rentInput = document.getElementById('rent-input');
    const rentAmont = rentInput.value;
     const clothesInput = document.getElementById('clothes-input');
     const clothesAmount = clothesInput.value;
     const expensesTotal = document.getElementById('total-expenses');
     const expensesNewTotal = parseFloat(foodAmount) + parseFloat(rentAmont) + parseFloat(clothesAmount);
     expensesTotal.innerText = expensesNewTotal;
 
 
     const totalBalnceText = document.getElementById('balance');
     const newBalancetotal = totalAmount - expensesNewTotal;
     totalBalnceText.innerText = newBalancetotal;

     totalIncome.value = '';
     foodInput.value = '';
     rentInput.value = '';
     clothesInput.value = '';
 });


 document.getElementById('Save-calc').addEventListener('click', function(){
    const saveCalc = document.getElementById('save-money-input');
    const saveAmount = saveCalc.value;
    const savingTotal = document.getElementById('saving-amount');
    const totalBalnceText = document.getElementById('balance');
    const remainingBalancetext = document.getElementById('remaining-balance');
    let previousBalanceText = parseFloat(totalBalnceText.innerText);
    const savesMoney = (previousBalanceText * saveAmount) / 100;
    savingTotal.innerText = savesMoney;


    remainingBalance = parseFloat(balance.innerText) - savesMoney ;
    remainingBalancetext.innerText = remainingBalance;
  
});



