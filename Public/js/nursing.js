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

    // Handle image upload
    document.getElementById('uploadButton').addEventListener('click', function() {
        const fileInput = document.getElementById('imageUpload');
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.getElementById('uploadedImage');
                img.src = e.target.result;

                // Save image data
                const patientId = patientList.value;
                const timestamp = new Date().toISOString();
                const images = JSON.parse(localStorage.getItem('images')) || {};
                if (!images[patientId]) images[patientId] = [];
                images[patientId].push({ src: e.target.result, timestamp });
                localStorage.setItem('images', JSON.stringify(images));

                alert('Image uploaded successfully!');
            };
            reader.readAsDataURL(file);
        }
    });
});
