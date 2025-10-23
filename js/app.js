'use strict';

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;

    if (className === 'dark-theme') {
        this.textContent = 'Light';
    }else {
        this.textContent = 'Dark';
    }

    console.log('current class name: ' + className);
});
  