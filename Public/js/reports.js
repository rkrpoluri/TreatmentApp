document.addEventListener('DOMContentLoaded', function() {
    // Load inpatient data (for simplicity, using local storage)
    const inpatients = JSON.parse(localStorage.getItem('patients')) || [];
    const inpatientList = document.getElementById('inpatientList');
    const patientSelect = document.getElementById('patientSelect');
    const scheduleDetails = document.getElementById('scheduleDetails');

    // Populate inpatient list in inpatients.html
    if (inpatientList) {
        inpatients.forEach(patient => {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${patient.name}, Room/Bed: ${patient.roomNumber}`;
            inpatientList.appendChild(listItem);
        });
    }

    // Populate patient select dropdown in schedule.html
    if (patientSelect) {
        inpatients.forEach(patient => {
            const option = document.createElement('option');
            option.value = patient.id;
            option.textContent = patient.name;
            patientSelect.appendChild(option);
        });

        patientSelect.addEventListener('change', function() {
            const selectedPatientId = patientSelect.value;
            const patient = inpatients.find(p => p.id === selectedPatientId);
            displaySchedule(patient);
        });
    }

    function displaySchedule(patient) {
        if (!patient) return;
        scheduleDetails.innerHTML = ''; // Clear previous details
        const treatmentList = JSON.parse(localStorage.getItem('treatments')) || {};
        const patientTreatments = treatmentList[patient.id] || [];
        
        patientTreatments.forEach(treatment => {
            const treatmentItem = document.createElement('div');
            treatmentItem.innerHTML = `
                <p>Procedure: ${treatment.procedure}</p>
                <p>Date: ${treatment.date}</p>
                <p>Notes: ${treatment.notes}</p>
            `;
            scheduleDetails.appendChild(treatmentItem);
        });
    }
});
