const temperature = 9; // °C
const windSpeed = 6; // km/h

document.getElementById('temp').textContent = temperature;
document.getElementById('wind').textContent = windSpeed;

function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const windChillSpan = document.getElementById('windchill');
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = Math.round(calculateWindChill(temperature, windSpeed));
    windChillSpan.textContent = `${windChill}°C`;
} else {
    windChillSpan.textContent = `N/A`;
}

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}
