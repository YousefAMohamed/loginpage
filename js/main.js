function signUp() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    if (!name || !email || !password) {
      document.getElementById('exist').innerText = "All fields are required.";
      return;
    }
  
    if (users.some(user => user.email === email)) {
      document.getElementById('exist').innerText = "Email already exists.";
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful! Redirecting to login.");
    location.href = "index.html";
  }
  
  function login() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const user = users.find(user => user.email === email && user.password === password);
  
    if (!user) {
      document.getElementById('incorrect').innerText = "Incorrect email or password.";
      return;
    }
  
    localStorage.setItem('sessionUser', JSON.stringify(user));
    location.href = "home.html";
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('sessionUser'));
    if (location.pathname.includes('home.html')) {
      if (!user) {
        alert("Please log in first.");
        location.href = "index.html";
      } else {
        document.getElementById('username').innerText = user.name;
      }
    }
  });
  
  function logout() {
    localStorage.removeItem('sessionUser');
    location.href = "index.html";
  }
  