document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperatureC = 5;
const windSpeedKmh = 15;

function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

let windChillDisplay = "N/A";

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    windChillDisplay = `${windChill.toFixed(1)} °C`;
}

document.getElementById("windchill").textContent = windChillDisplay;
