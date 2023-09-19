// Simulated queue numbers
const queueData = {
    registrar: "R0045",
    admission: "AD0012",
    academics: "F0003",
    assets: "AS0009",
    accounting: "AC0123",
    clinic: "CL0001",
    itro: "IT0099",
    guidance: "G0010",
};

// Function to update queue numbers
function updateQueueNumbers() {
    for (const office in queueData) {
        const queueNumberElement = document.getElementById(`${office}Queue`);
        if (queueNumberElement) {
            queueNumberElement.textContent = queueData[office];
        }
    }
}

// Simulate updating queue numbers every 5 seconds
setInterval(updateQueueNumbers, 5000);

// Initial update
updateQueueNumbers();


// For DATE AND TIME
function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options).toUpperCase();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')}${ampm}`;

    // Update the elements with the formatted date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
