
rank = sessionStorage.getItem('auth');

const idBox = document.getElementById('id');
const passBox = document.getElementById('password');
const login = document.getElementById("login");


login.addEventListener('click',(e) =>{
    e.preventDefault();
    const id = idBox.value;
    const password = passBox.value;

    if (id === '' || password === '') {
        alert('Input cannot be Empty!');
        
    }
    else {
        fetch(apiLink + 'login/admin' + `?id=${encodeURIComponent(id)}&&password=${encodeURIComponent(password)}`)
        .then(res => res.json())
        .then((res => {
            console.log(res.id);
            console.log(res.found);
            if (res.found) {
                sessionStorage.setItem('auth','admin');
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

console.log(rank);