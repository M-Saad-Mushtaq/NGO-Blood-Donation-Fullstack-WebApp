rank = sessionStorage.getItem('auth');

const idBox = document.getElementById('cnic');
const passBox = document.getElementById('password');

const login = document.getElementById("login");
const staffLogin = document.getElementById("staff_login");
const signup = document.getElementById("signup");



login.addEventListener('click',(e) =>{
    e.preventDefault();
    const id = idBox.value;
    const password = passBox.value;

    if (id === '' || password === '') {
        alert('Input cannot be Empty!');
    }
    else {
        fetch(apiLink + 'login/user' + `?id=${encodeURIComponent(id)}&&password=${encodeURIComponent(password)}`)
        .then(res => res.json())
        .then((res => {
            console.log(res.id);
            console.log(res.found);
            if (res.found) {
                sessionStorage.setItem('auth','user');
                rank = sessionStorage.getItem('auth');
                sessionStorage.setItem('id',id);
                location.href = 'index.html';
            }
            else{
                alert('Incorrect Credentials!!');
            }
        })
        )
        
    }
})

signup.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location = 'Signup.html'
})

staffLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location = 'staff_login.html'
})

console.log(rank);