
 // Native anchor links handle navigation and scrolling.
 // This script manages the mobile menu, theme, and footer year.
 const menuButton = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('#nav-links');

 if (menuButton && navLinks) {
   const closeMenu = () => {
     navLinks.classList.remove('open');
     menuButton.setAttribute('aria-expanded', 'false');
     menuButton.setAttribute('aria-label', 'Open navigation');
   };

   menuButton.addEventListener('click', () => {
     const open = navLinks.classList.toggle('open');
     menuButton.setAttribute('aria-expanded', String(open));
     menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
   });

   navLinks.querySelectorAll('a').forEach(link =>
     link.addEventListener('click', closeMenu)
   );

   document.addEventListener('keydown', event => {
     if (event.key === 'Escape') closeMenu();
   });
 }

 const themeButton = document.querySelector('.theme-toggle');
 const root = document.documentElement;
 let savedTheme = null;

 try {
   savedTheme = localStorage.getItem('portfolio-theme');
 } catch (_) {}

 if (savedTheme === 'light') root.classList.add('light');

 function syncThemeButton() {
   if (!themeButton) return;
   const light = root.classList.contains('light');
   themeButton.textContent = light ? '☾' : '☀';
   themeButton.setAttribute('aria-label',
     light ? 'Switch to dark theme' : 'Switch to light theme');
 }

 syncThemeButton();

 themeButton?.addEventListener('click', () => {
   root.classList.toggle('light');
   try {
     localStorage.setItem('portfolio-theme',
       root.classList.contains('light') ? 'light' : 'dark');
   } catch (_) {}
   syncThemeButton();
 });

 const year = document.querySelector('#year');
 if (year) year.textContent = String(new Date().getFullYear());

 const navigation = [...document.querySelectorAll('.nav-links a[href^="#"]')];

 function setActiveLink() {
   const current = location.hash || '#home';
   navigation.forEach(link => {
     const active = link.getAttribute('href') === current;
     link.classList.toggle('active', active);
     if (active) link.setAttribute('aria-current', 'location');
     else link.removeAttribute('aria-current');
   });
 }

 window.addEventListener('hashchange', setActiveLink);
 setActiveLink();
