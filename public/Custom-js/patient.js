rank = sessionStorage.getItem('auth');

const patient = document.getElementById("enter");


patient.addEventListener('click',(e) =>{
    e.preventDefault();


    const bloodPressure = document.getElementById('bloodPressure').value;
    const id = document.getElementById('cnic').value;
    const haemoglobin = document.getElementById('haemoglobin').value;
    const Platelets = document.getElementById('Platelets').value;
    const gender = document.getElementById('gender').value;
    const bloodtype = document.getElementById('bloodtype').value;
    const rbc = document.getElementById('rbc').value;
    const centerId = document.getElementById('centerId').value;
    const temperature = document.getElementById('temperature').value;

    

    function fieldEmpty() {
        if (temperature ==='' || bloodPressure ==='' || id ==='' 
            || haemoglobin ==='' || Platelets ==='' || gender ==='' 
            || rbc ==='' || centerId ==='' || bloodtype ==='' ) {
            return true;
        }
        return false;
    }

    

    if (fieldEmpty()) {
        alert('Input cannot be Empty!');
    }
    else 
    {
        fetch(apiLink + 'signup/patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                 bloodPressure : bloodPressure,
                 id : id,
                 haemoglobin : haemoglobin,
                 Platelets : Platelets,
                 gender : gender,
                 rbc : rbc,
                 centerId : centerId,
                 temperature : temperature,
                 bloodtype : bloodtype,
                 remarks: ''
             })})
        .then(() => {
            console.log();
            console.log("After fetching api");
        })
    }
})


console.log(rank);