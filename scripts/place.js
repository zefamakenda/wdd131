
const yearSpan = document.getElementById('currentyear');
const lastModifiedPara = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedPara.textContent = `Last modified: ${document.lastModified}`;


const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
