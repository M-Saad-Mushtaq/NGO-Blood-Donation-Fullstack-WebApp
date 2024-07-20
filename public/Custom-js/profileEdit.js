
rank = sessionStorage.getItem('auth');

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();

    const id = sessionStorage.getItem('id');

    fetch(apiLink + 'profileEdit' + `?id=${encodeURIComponent(id)}`)
    .then(res => res.json())
    .then((res) => {
        if (res.found) {
            document.getElementById('contactNo').value = res.user.contactNo;
            document.getElementById('email').value = res.user.email;
            document.getElementById('city').value = res.user.city;
            document.getElementById('weight').value = res.user.weight;
            document.getElementById('healthCard').value = res.user.healthCard;
            document.getElementById('condition').value = res.user.condition;
            document.getElementById('address').value = res.user.address;
            document.getElementById('password').value = res.user.password;
        }
        else{
            alert('User Not Found!!');
        }
    })
    
})



const update = document.getElementById("enter");


update.addEventListener('click',(e) =>{
    e.preventDefault();

    const id = sessionStorage.getItem('id');


    const contactNo = document.getElementById('contactNo').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const weight = document.getElementById('weight').value;
    const healthCard = document.getElementById('healthCard').value;
    const condition = document.getElementById('condition').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    

    
    fetch(apiLink + 'profileEdit' + `?id=${encodeURIComponent(id)}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
             contactNo : contactNo,
             email : email,
             city : city,
             weight : weight,
             healthCard : healthCard,
             condition : condition,
             address : address,
             password : password
         })})
    .then(() => {
        console.log();
        console.log("After fetching api");
    })
})


console.log(rank);