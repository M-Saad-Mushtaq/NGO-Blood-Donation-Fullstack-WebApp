
rank = sessionStorage.getItem('auth');

if (rank === null || rank === 'none') {
    sessionStorage.setItem('auth','none');

    signout.style.display = "none";
    patientEntry.style.display = "none";
    addCenter.style.display = "none";
    staffEntry.style.display = "none";
    profileEdit.style.display = "none";
}
else if (rank === 'user') {
    patientEntry.style.display = "none";
    addCenter.style.display = "none";
    staffEntry.style.display = "none";
    navlogin.style.display = "none";
    navsignup.style.display = "none";
    navStaff.style.display = "none";
    navAdmin.style.display = "none";
}
else if (rank === 'admin') {

    signout.style.display = "inline-block";
    patientEntry.style.display = "inline-block";
    addCenter.style.display = "inline-block";
    staffEntry.style.display = "inline-block";
    profileEdit.style.display = "inline-block";
    
    navlogin.style.display = "none";
    navsignup.style.display = "none";
}
else if (rank === 'staff') {
    signout.style.display = "inline-block";
    patientEntry.style.display = "inline-block";
    profileEdit.style.display = "inline-block";

    addCenter.style.display = "none";
    staffEntry.style.display = "none";
    navStaff.style.display = "none";
    navAdmin.style.display = "none";
    navlogin.style.display = "none";
    navsignup.style.display = "none";
}

signout.addEventListener('click',()=>{
    sessionStorage.setItem('auth','none');
    rank = sessionStorage.getItem('auth');
    window.location = 'index.html';
})

console.log(rank);