rank = sessionStorage.getItem('auth');

const enter = document.getElementById('enter');

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
            fetch(apiLink + 'test_result' + `?id=${encodeURIComponent(id)}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                
                const data = `
                            <tr class='gridview-row'>
                                <td>${res.id}</td>
                                <td>${res.centerId}</td>
                                <td>${res.gender}</td>
                                <td>${res.bloodtype}</td>
                                <td>${res.bloodPressure}</td>
                                <td>${res.temperature}</td>
                                <td>${res.Platelets}</td>
                                <td>${res.haemoglobin}</td>
                                <td>${res.rbc}</td>
                                <td>${res.remarks}</td>
                            </tr>
                                `;
                    insertData.innerHTML += data;
                
                
            })
        }
    }

})