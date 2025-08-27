

const btn = document.getElementById('btn-login');

btn.addEventListener('click',function(e){
    e.preventDefault();
    
    const defaultPhoneNumber = '01824323912';
    const defaultPassWord = 'saimon';

    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('pin').value;

    if(phoneNumber === '' && password === ''){
        alert('Please give your phone number and password');
        return ;
    }


    if(phoneNumber === defaultPhoneNumber && password === defaultPassWord){
        window.location.href = 'home.html' ;   
    }
    else{
        alert('Incorrect Credentials');
        
    }
    

    
})
