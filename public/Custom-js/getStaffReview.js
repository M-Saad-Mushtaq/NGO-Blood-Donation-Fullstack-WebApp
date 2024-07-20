document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();

    const insertData = document.getElementById('insertData');

    fetch(apiLink + 'review/staff')
    .then(res => res.json())
        .then((res) => {
            console.log(res);
            
            for (let i = 0; i < res.length; i++) {
                const data = `
                         <tr class='gridview-row'>
                            <td>${res[i].staffId}</td>
                            <td>${res[i].centerId}</td>
                            <td>${res[i].rating}</td>
                            <td>${res[i].remarks}</td>
                        </tr>
                            `;
                insertData.innerHTML += data;
                
            }
            
            
        })
})