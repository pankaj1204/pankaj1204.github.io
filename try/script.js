function verifyRecord() {
    var registrationNumber = document.getElementById('registrationNumber').value;

    // Make a request to your API or fetch data directly from a JSON file
    // For simplicity, let's assume we have a JSON file named records.json
    fetch('C:\\Users\\AGARWAL\\IdeaProjects\\NEXACODE\\.idearecords.json')
        .then(response => response.json())
        .then(data => {
            // Check if the registration number exists in the records
            var found = data.some(record => record.registrationNumber === registrationNumber);
            if (found) {
                document.getElementById('verificationResult').innerText = 'Record found!';
            } else {
                document.getElementById('verificationResult').innerText = 'Record not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('verificationResult').innerText = 'An error occurred. Please try again later.';
        });
}
