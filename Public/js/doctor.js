document.addEventListener('DOMContentLoaded', function() {
    // Load patient list
    const patients = JSON.parse(localStorage.getItem('patients')) || [];
    const patientList = document.getElementById('patientList');

    patients.forEach(patient => {
        const option = document.createElement('option');
        option.value = patient.id;
        option.textContent = patient.name;
        patientList.appendChild(option);
    });

    // Display images for selected patient
    patientList.addEventListener('change', function() {
        const patientId = patientList.value;
        const images = JSON.parse(localStorage.getItem('images')) || {};
        const imageGallery = document.getElementById('imageGallery');
        imageGallery.innerHTML = '';

        if (images[patientId]) {
            images[patientId].forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.src;
                imgElement.width = 320;
                imgElement.height = 240;
                const timestamp = document.createElement('p');
                timestamp.textContent = `Uploaded on: ${image.timestamp}`;
                imageGallery.appendChild(imgElement);
                imageGallery.appendChild(timestamp);
            });
        }
    });
});
