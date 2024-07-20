rank = sessionStorage.getItem('auth');

const info = document.getElementById("enter1");
const select = document.getElementById("enter2");

let patientType;
let bloodtype ;
let city ;


info.addEventListener('click',(e) =>{
    e.preventDefault();

    const insertData = document.getElementById('table');

     patientType = document.getElementById('patientType').value;
     bloodtype = document.getElementById('bloodtype').value;
     city = document.getElementById('city').value;
    

    function fieldEmpty() {
        if (patientType ==='' || city ==='' || bloodtype ==='' ) {
            return true;
        }
        return false;
    }

    

    if (fieldEmpty()) {
        alert('Input cannot be Empty!');
    }
    else 
    {
        

        fetch(apiLink + 'acceptorDonor' + `?patientType=${encodeURIComponent(patientType)}&&city=${encodeURIComponent(city)}&&bloodtype=${encodeURIComponent(bloodtype)}`)
        .then(res => res.json())
        .then((res) => {
            console.log(res);

            if (res.length > 0) {
                document.getElementById('data').style.display = 'block';
                document.getElementById('select').style.display = 'block';
                document.getElementById('button2').style.display = 'block';
            }
            
            for (let i = 0; i < res.length; i++) {
                const data = `
                        <tr class='gridview-row'>
                            <td>${res[i].centerId}</td>
                            <td>${res[i].city}</td>
                            <td>${res[i].bloodtype}</td>
                            <td>${res[i].quantity}</td>
                            <td>${res[i].patientType}</td>
                        </tr>
                            `;
                insertData.innerHTML += data;
                
            }
            
            
        })

            
    }
})


select.addEventListener('click',(e) =>{
    e.preventDefault();

    if (rank != 'user') {
        alert("You are not a user!!");
    }
    else {
        const center = document.getElementById('centerId').value;
    

        function fieldEmpty() {
            if (patientType ===''  ) {
                return true;
            }
            return false;
        }

        

        if (fieldEmpty()) {
            alert('Input cannot be Empty!');
        }
        else 
        {
            fetch(apiLink + 'acceptorDonor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id : sessionStorage.getItem('id'),
                    centerId : center,
                    patientType : patientType,
                    bloodtype: bloodtype,
                    city: city
                })})
                .then(res => res.json())
                .then((res => {
                    console.log(res);
                    alert('Appointment Set!!');
                })
                )
        }
    }
    
})


console.log(rank);