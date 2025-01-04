document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            alert('Please fill in both fields');
            return;
        }
        
        if (username === 'admin' && password === 'admin123') {
            alert('Sign-in successful');
            localStorage.setItem('isAdmin', true); // Store admin status
            window.location.href = 'edit-resources.html'; // Redirect to admin page
        } else {
            alert('Invalid username or password');
        }
    });
});
