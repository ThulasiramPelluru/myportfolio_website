
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
};
window.onscroll = () => {
  navbar.classList.remove('active');
};

let darkMode = document.querySelector('#darkMode');
darkMode.onclick = () => {
  if (darkMode.classList.contains("bx-moon")) {
    darkMode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add('active');
  } else {
    darkMode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
