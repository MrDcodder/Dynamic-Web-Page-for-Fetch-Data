document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

let isDataVisible = false;  // Variable to track the visibility of data

function fetchData() {
    const dataContainer = document.getElementById('dataContainer');

    if (isDataVisible) {
        // If data is visible, hide it
        dataContainer.innerHTML = ''; // Clear the content
        isDataVisible = false;  // Update visibility status
        document.getElementById('fetchDataBtn').innerText = 'Fetch Data'; // Change button text
    } else {
        // If data is not visible, fetch it
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'data.txt', true);  // Path to your text file

        xhr.onload = function() {
            if (this.status === 200) {
                dataContainer.innerText = this.responseText;  // Display the content
                isDataVisible = true;  // Update visibility status
                document.getElementById('fetchDataBtn').innerText = 'Hide Data'; // Change button text
            }
        };

        xhr.onerror = function() {
            dataContainer.innerHTML = '<p class="text-danger">Request error...</p>';
        };

        xhr.send();
    }
}
