// getdates.js
const yearSpan = document.getElementById('currentyear');
const lastModifiedPara = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedPara.textContent = `Last modified: ${document.lastModified}`;