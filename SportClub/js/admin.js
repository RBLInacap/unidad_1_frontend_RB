document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('userRole');
    if (role !== 'admin') {
        window.location.href = 'login.html';
        return;
    }

    const tableBody = document.getElementById('userTableBody');
    const btnLogout = document.getElementById('btnLogout');

    if (btnLogout) {
        btnLogout.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'index.html';
        });
    }

    // Datos simulados
    const usuarios = [
        { nombre: 'Admin General', email: 'admin@inacapmail.cl', rol: 'admin' },
        { nombre: 'Juan Perez', email: 'j.perez@inacapmail.cl', rol: 'user' },
        { nombre: 'Coach Pro', email: 'coach@inacapmail.cl', rol: 'coach' }
    ];

    if (tableBody) {
        tableBody.innerHTML = '';
        usuarios.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td><span class="badge ${user.rol === 'admin' ? 'bg-dark' : 'bg-primary'}">${user.rol}</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-primary me-1">Editar</button>
                    <button class="btn btn-sm btn-outline-danger">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }
});