function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.toggle-btn');
    btn.textContent = document.body.classList.contains('dark') ? '🌞 Light Mode' : '🌝 Dark Mode';
  }
  