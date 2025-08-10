const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('aside.sidebar');
const mainContent = document.querySelector('.main-content');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('sidebar-active');
});

// Close sidebar when clicking outside on mobile
mainContent.addEventListener('click', () => {
  if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    mainContent.classList.remove('sidebar-active');
  }
});
