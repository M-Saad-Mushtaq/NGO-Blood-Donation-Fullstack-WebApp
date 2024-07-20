rank = sessionStorage.getItem('auth');

const card = document.getElementById("enter");


card.addEventListener('click',(e) =>{
    e.preventDefault();

    if (rank != 'user') {
        alert('You are not a User!!');
    }
    else {
        const id = sessionStorage.getItem('id');;
        const healthcardId = document.getElementById('healthcardId').value;

        

        function fieldEmpty() {
            if (id ==='' || healthcardId === '') {
                return true;
            }
            return false;
        }

        

        if (fieldEmpty()) {
            alert('Input cannot be Empty!');
        }
        else 
        {
            fetch(apiLink + 'signup/healthcard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id : id,
                    healthcardId : healthcardId
                })})
                .then(res => res.json())
                .then((res) => {
                    location.href = 'profileedit.html';
                })
        }
    }
})


console.log(rank);