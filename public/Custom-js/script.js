
let rank = sessionStorage.getItem('auth');

const signout = document.getElementById("signout");
const patientEntry = document.getElementById("patient-entry");
const addCenter = document.getElementById("add-center");
const staffEntry = document.getElementById("enter-staff");
const navlogin = document.getElementById("nav-login");
const navsignup = document.getElementById("nav-signup");
const navStaff = document.getElementById("staff-login");
const navAdmin = document.getElementById("admin-login");
const profileEdit = document.getElementById("profile-edit");

const apiLink = 'http://localhost:5000/Blood/public/';

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