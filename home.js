

const btn = document.getElementById('btn-add-money');

btn.addEventListener('click',function(e){
    e.preventDefault();

    const accNumber = document.getElementById('acc-number').value;
    const amount = document.getElementById('amount').value;
    const pin = document.getElementById('pin').value;
    const availBalance = document.getElementById('availBalance');

    if(accNumber.length != 11 ){
        alert('Please enter a valid account number!')
        return;
    }

    if(pin.length != 4){
        alert('Please enter valid pin number!')
        return
    }

    let balance = Number(availBalance.innerText);
    console.log(balance);
    let amt = Number(amount);

    balance = balance + amt;

    availBalance.innerText = balance;


})