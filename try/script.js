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
                var resultDiv = document.getElementById('verificationResult');
                resultDiv.innerHTML = '<strong>Records found:</strong><br>';
                filteredRecords.forEach(record => {
                    var recordDiv = document.createElement('div');
                    recordDiv.innerHTML = `<strong>Registration Number:</strong> ${record.registrationNumber}<br>
                                           <strong>Name:</strong> ${record.name}<br>
                                           <strong>Age:</strong> ${record.age}<br>
                                           <strong>Email:</strong> ${record.email}<br><br>`;
                    resultDiv.appendChild(recordDiv);
                });
            } else {
                document.getElementById('verificationResult').innerText = 'Record not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('verificationResult').innerText = 'An error occurred. Please try again later.';
        });
}
