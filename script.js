function registerStudent() {
    var studentId = document.getElementById("studentId").value;
    var office = document.getElementById("modalTitle1").innerText;

    $.ajax({
        type: "POST",
        url: "process.php",
        data: { studentId: studentId, office: office },
        dataType: "json",
        success: function (response) {
            if (response.success) {
                var queueNumber = response.queue_number;
                // Set the queue number in the modal
                document.getElementById("queueNumber").innerText = queueNumber;
                // Show the third modal
                $('#thirdModal').modal('show');
            } else {
                alert("Error: " + response.message);
            }
        },
        error: function () {
            alert("An error occurred.");
        }
    });
}

// Function to update the modal titles
function updateModalTitle(modalId, title) {
    $(modalId).find(".modal-title").text(title);
}

// Event listener for button clicks
$(".btn").click(function() {
    var modalTitle = $(this).data("title");

    // Update the titles of all three modals
    updateModalTitle("#firstModal", modalTitle);
    updateModalTitle("#secondModal", modalTitle);
    updateModalTitle("#thirdModal", modalTitle);
});

$(document).ready(function () {
    // Function to update queue numbers on the page
    function updateQueueNumbers() {
        $.ajax({
            type: "GET",
            url: "get_queue_numbers.php",
            dataType: "json",
            success: function (data) {
                // Update HTML elements with the fetched queue numbers
                $("#registrarQueue").text(data.registrar);
                $("#admissionQueue").text(data.admission);
                $("#accountingQueue").text(data.accounting);
                $("#academicsQueue").text(data.academics);
                $("#clinicQueue").text(data.clinic);
                $("#assetsQueue").text(data.assets);
                $("#guidanceQueue").text(data.guidance);
                $("#itroQueue").text(data.itro);
            },
            error: function () {
                console.error("An error occurred while fetching queue numbers.");
            }
        });
    }

    // Call the updateQueueNumbers function initially and then at regular intervals
    updateQueueNumbers();
    setInterval(updateQueueNumbers, 5000); // Update every 5 seconds
});

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
    const formattedHours = hours >= 12 ? hours % 12 : hours; // Convert to 12-hour format

    // Ensure that 0 is displayed as 12 for midnight
    const displayHours = formattedHours === 0 ? 12 : formattedHours;

    const minutes = now.getMinutes(); // Get the minutes
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedTime = `${displayHours}:${minutes.toString().padStart(2, '0')}${ampm}`;

    // Update the elements with the formatted date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

