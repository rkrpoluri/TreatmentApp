document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Collect form data and save it
    const formData = new FormData(event.target);
    // Save to local storage for simplicity
    localStorage.setItem('admission', JSON.stringify(Object.fromEntries(formData.entries())));
    alert('Patient admitted successfully!');
});
