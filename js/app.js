


document.getElementById('calc-btn').addEventListener('click', function(){
   const foodInput = document.getElementById('food-input');
   const foodAmount = foodInput.value;
   const rentInput = document.getElementById('rent-input');
   const rentAmont = rentInput.value;
    const clothesInput = document.getElementById('clothes-input');
    const clothesAmount = clothesInput.value;
    const expensesTotal = document.getElementById('total-expenses');
    const expensesNewTotal = parseFloat(foodAmount) + parseFloat(rentAmont) + parseFloat(clothesAmount);
    expensesTotal.innerText = expensesNewTotal;

    const totalIncome = document.getElementById('total-income');
    const totalAmount = totalIncome.value;

    const totalBalnceText = document.getElementById('total-balance');
    const newBalancetotal = totalAmount - expensesNewTotal;
    totalBalnceText.innerText = newBalancetotal;

    totalIncome.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';
});



document.getElementById('Save-calc').addEventListener('click', function(){
    const saveCalc = document.getElementById('save-input');
    const saveAmount = saveCalc.value;
    const savingTotal = document.getElementById('saving-total');
    const discount = (previousBalanceText * saveAmount) / 100;
    savingTotal.innerText = discount;


    const totalBalnceText = document.getElementById('total-balance');
    const remainingBalancetext = document.getElementById('remaining-balance');
    
    let previousBalanceText = parseFloat(totalBalnceText.innerText);
    
    let remainingBalance = totalBalnceText - savingTotal;
    remainingBalancetext.innerText = remainingBalance;

    
   
    
});