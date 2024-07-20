rank = sessionStorage.getItem('auth');

const signup = document.getElementById("enter");


signup.addEventListener('click',(e) =>{
    e.preventDefault();


    const fullname = document.getElementById('name').value;
    const birthDate = document.getElementById('birthDate').value;
    const id = document.getElementById('cnic').value;
    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;
    const weight = document.getElementById('weight').value;
    const healthCard = document.getElementById('healthCard').value;
    const bloodtype = document.getElementById('bloodtype').value;
    const condition = document.getElementById('condition').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    

    function fieldEmpty() {
        if (fullname ==='' || birthDate ==='' || id ==='' 
            || contactNo ==='' || email ==='' || gender ==='' 
            || city ==='' || weight ==='' || bloodtype ==='' 
            || condition ==='' || address ==='' || password ==='') {
            return true;
        }
        return false;
    }

    

    if (fieldEmpty()) {
        alert('Input cannot be Empty!');
    }
    else 
    {
        fetch(apiLink + 'signup/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                 fullname : fullname,
                 birthDate : birthDate,
                 id : parseInt(id),
                 contactNo : contactNo,
                 email : email,
                 gender : gender,
                 city : city,
                 weight : weight,
                 healthCard : healthCard,
                 bloodtype : bloodtype,
                 condition : condition,
                 address : address,
                 password : password
             })})
        .then(res => res.json())
        .then((res => {
            console.log(res);
            if (res.status === 'success') {
                location.href = 'Login.html';
            }
            else{
                alert('User with same id already exists!!');
            }
        })
        )
    }
})


console.log(rank);