rank = sessionStorage.getItem('auth');

const enter = document.getElementById('getAppoint');

enter.addEventListener('click',(e) => {
    e.preventDefault();

    if (rank != 'user') {
        alert('You are not a user!!');
    }
    else {
        document.getElementById('table').style.display = 'block';
        const id = sessionStorage.getItem('id');

        const insertData = document.getElementById('insertData');

        if (id === '') {
            alert('Id Error!');
        }
        else {
            fetch(apiLink + 'acceptorDonor/appointment' + `?id=${encodeURIComponent(id)}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                
                for (let i = 0; i < res.length; i++) {
                    const data = `
                            <tr class='gridview-row'>
                                <td>${res[i].centerId}</td>
                                <td>${res[i].city}</td>
                                <td>${res[i].patientType}</td>
                                <td>${res[i].bloodtype}</td>
                            </tr>
                                `;
                    insertData.innerHTML += data;
                }
                
            })
        }
    }

})