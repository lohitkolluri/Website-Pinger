let pingInterval;

function pingWebsite(url) {
    console.log("Pinging " + url + "...");
    // You can use the Fetch API or XMLHttpRequest to make a request
    // Example using Fetch API:
    fetch(url)
        .then(response => console.log(response.status))
        .catch(error => console.error('Error:', error));
}

function startPinging() {
    const urlInput = document.getElementById('urlInput');
    const intervalInput = document.getElementById('intervalInput');
    const statusMessage = document.getElementById('statusMessage');
    const websiteUrl = urlInput.value.trim();
    const intervalSeconds = parseInt(intervalInput.value);

    if (websiteUrl === '') {
        alert('Please enter a valid website URL.');
        return;
    }

    if (isNaN(intervalSeconds) || intervalSeconds < 1) {
        alert('Please enter a valid interval (1 or more seconds).');
        return;
    }

    // Display "Pinging started" message
    statusMessage.textContent = 'Pinging started...';

    // Initial ping
    pingWebsite(websiteUrl);

    // Set up the interval for periodic pinging
    pingInterval = setInterval(function () {
        pingWebsite(websiteUrl);
    }, intervalSeconds * 1000); // Convert seconds to milliseconds
}
