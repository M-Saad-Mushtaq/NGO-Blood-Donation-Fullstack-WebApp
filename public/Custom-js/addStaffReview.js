rank = sessionStorage.getItem('auth');

const enterStaffReview = document.getElementById("enter");


enterStaffReview.addEventListener('click',(e) =>{
    e.preventDefault();

    if (rank != 'user') {
        alert('You are not a user!!');
    }
    else {
        const centerId = document.getElementById('centerId').value;
        const staffId = document.getElementById('staffId').value;
        const rating = document.getElementById('rating').value;
        const remarks = document.getElementById('remarks').value;

        

        function fieldEmpty() {
            if (centerId ==='' || staffId ==='' || rating ==='' || remarks ==='') {
                return true;
            }
            return false;
        }

        

        if (fieldEmpty()) {
            alert('Input cannot be Empty!');
        }
        else 
        {
            fetch(apiLink + 'review/staff', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    centerId : centerId,
                    staffId : staffId,
                    rating : rating,
                    remarks : remarks
                })})
                .then(res => res.json())
                .then((res => {
                    console.log(res);
                    if (res.status === 'success') {
                        location.href = 'StaffReview.html';
                    }
                    else{
                        alert('Review not added!!');
                    }
                })
                )
        }
    }
})


console.log(rank);