document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const emailError = document.getElementById('emailError');
            const loginMessage = document.getElementById('loginMessage');

            // Validación básica
            if (!email.includes('@inacapmail.cl')) {
                emailError.textContent = "Usa tu correo institucional.";
                return;
            }

            // Simulador de roles
            let role = 'user';
            if (email === 'admin@inacapmail.cl') role = 'admin';
            else if (email === 'coach@inacapmail.cl') role = 'coach';

            localStorage.setItem('token', 'token_validado');
            localStorage.setItem('userRole', role);

            // Como ya estamos en la carpeta 'vistas', solo llamamos al archivo
            if (role === 'admin') window.location.href = 'dashboard-admin.html';
            else if (role === 'coach') window.location.href = 'dashboard-coach.html';
            else window.location.href = 'dashboard-usuario.html';
        });
    }
});