document.addEventListener('DOMContentLoaded', function() {
    // Fetch inpatient data (for simplicity, using local storage)
    const inpatients = JSON.parse(localStorage.getItem('admission') || '[]');
    const inpatientList = document.getElementById('inpatient-list');

    inpatients.forEach((patient, index) => {
        const patientDiv = document.createElement('div');
        patientDiv.innerHTML = `
            <p>${patient.patientName} - Room: ${patient.roomNumber}</p>
            <button onclick="selectPatient(${index})">Select</button>
        `;
        inpatientList.appendChild(patientDiv);
    });

    document.getElementById('duesCleared').addEventListener('change', function() {
        document.getElementById('proceedDischarge').disabled = !this.checked;
    });
});

function selectPatient(index) {
    document.getElementById('discharge-form').style.display = 'block';
}
