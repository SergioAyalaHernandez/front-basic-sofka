const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');

        // Verificar si hay una sesión activa
        const checkSession = () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn === 'true') {
                alert('Ya has iniciado sesión');
            }
        };

        const validateForm = () => {
            let isValid = true;

            if (!usernameInput.value.trim()) {
                usernameError.style.display = 'block';
                isValid = false;
            } else {
                usernameError.style.display = 'none';
            }

            if (!passwordInput.value.trim()) {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            return isValid;
        };

        // Event Listeners
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (validateForm()) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', usernameInput.value);
                alert('Login exitoso');
            }
        });

        document.querySelector('.cancel-btn').addEventListener('click', () => {
            usernameInput.value = '';
            passwordInput.value = '';
            usernameError.style.display = 'none';
            passwordError.style.display = 'none';
        });

        document.addEventListener('DOMContentLoaded', checkSession);

        clearStorageBtn.textContent = 'Eliminar datos de sesión';
clearStorageBtn.type = 'button';
clearStorageBtn.className = 'clear-storage-btn';
clearStorageBtn.addEventListener('click', clearLocalStorage);
document.body.appendChild(clearStorageBtn); // Agregar el botón al final del cuerpo del documento

document.addEventListener('DOMContentLoaded', checkSession);