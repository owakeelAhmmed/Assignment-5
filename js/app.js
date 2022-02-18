
let income = 0;
let expense = 0;
document.getElementById('calc-btn').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;//========income input fild ======>
    income= parseFloat(incomeAmount);
    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;//========foof input fild =======>
    const rentInput = document.getElementById('rent-input');
    const rentAmont = rentInput.value;//======== reent input fild ======>
     const clothesInput = document.getElementById('clothes-input');
     const clothesAmount = clothesInput.value;//=======clothes input fild ======>
     const expensesTotal = document.getElementById('total-expenses');//===== expenses Total id =====>
     const expensesNewTotal = parseFloat(foodAmount) + parseFloat(rentAmont) + parseFloat(clothesAmount);
     expensesTotal.innerText = expensesNewTotal;
     expense = parseFloat(expensesTotal.innerText);
    //====== If the user gives negative input then this erroe will show ===========>
     if(incomeAmount < 0){
         alert("Please enter the positiv value!!")
     }else if(foodAmount < 0){
        alert("Please enter the positiv value!!")
     }else if(rentAmont < 0){
        alert("Please enter the positiv value!!")
     }else if(clothesAmount < 0){
        alert("Please enter the positiv value!!")
     }
     else{
        const totalBalnceText = document.getElementById('balance');
        const newBalancetotal = incomeAmount - expensesNewTotal;
        totalBalnceText.innerText = newBalancetotal;
     }

     incomeInput.value = '';
     foodInput.value = '';
     rentInput.value = '';
     clothesInput.value = '';
 });

 document.getElementById('Save-calc').addEventListener('click', function(){
    const saveMoneyInput = document.getElementById('save-money-input');
    const saveAmount = saveMoneyInput.value;//===== Save money input =======>
    const savingAmount = document.getElementById('saving-amount');// ====== Saving amount id =======>
    const totalBalnce = document.getElementById('balance');// ======= Balance id ========>
    const remainingBalancetext = document.getElementById('remaining-balance'); // remaining balance id =====>
    let BalanceText = parseFloat(totalBalnce.innerText);
    const savesMoney = (BalanceText * saveAmount) / 100;
  
    //======> If the cost is more than the user's income then this error will show =======>
    if(income<expense){
       alert("expense more then income")
    }else if(saveAmount < 0){
        alert("Please enter the positiv value!!")
    }
    else{
        remainingBalance = parseFloat(balance.innerText) - savesMoney;
        savingAmount.innerText = savesMoney;
        remainingBalancetext.innerText = remainingBalance;
    }
 
});



