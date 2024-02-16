function verifyRecord() {
    var registrationNumber = document.getElementById('registrationNumber').value;

    // Make a request to your API or fetch data directly from a JSON file
    // For simplicity, let's assume we have a JSON file named records.json
    fetch('records.json')
        .then(response => response.json())
        .then(data => {
            // Filter the records based on the entered registration number
            var filteredRecords = data.filter(record => record.registrationNumber === registrationNumber);
            if (filteredRecords.length > 0) {
                // If records are found, display them
                document.getElementById('verificationResult').innerHTML = '<strong>Records found:</strong><br>' + JSON.stringify(filteredRecords, null, 2);
            } else {
                document.getElementById('verificationResult').innerText = 'Record not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('verificationResult').innerText = 'An error occurred. Please try again later.';
        });
}
