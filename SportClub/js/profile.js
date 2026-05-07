document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('profileName').textContent = "Estudiante Inacap";
    document.getElementById('profileEmail').textContent = email;
});