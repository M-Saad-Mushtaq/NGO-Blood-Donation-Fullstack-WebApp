rank = sessionStorage.getItem('auth');

const signup = document.getElementById("enter");


signup.addEventListener('click',(e) =>{
    e.preventDefault();


    const fullname = document.getElementById('name').value;
    const birthDate = document.getElementById('birthdate').value;
    const id = document.getElementById('cnic').value;
    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;
    const centerId = document.getElementById('centerId').value;

    

    function fieldEmpty() {
        if (fullname ==='' || birthDate ==='' || id ==='' 
            || contactNo ==='' || email ==='' || gender ==='' 
            || address ==='' || password ==='' || centerId === '') {
            return true;
        }
        return false;
    }

    

    if (fieldEmpty()) {
        alert('Input cannot be Empty!');
    }
    else 
    {
        fetch(apiLink + 'signup/staff', {
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
                 centerId : centerId,
                 address : address,
                 password : password
             })})
             .then(res => res.json())
             .then((res => {
                 console.log(res);
                 if (res.status === 'success') {
                     location.href = 'staff_login.html';
                 }
                 else{
                     alert('Staff with same id already exists!!');
                 }
             })
             )
    }
})


console.log(rank);