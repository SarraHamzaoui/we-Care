const open = document.getElementById('open');
const m_container = document.getElementById('m_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    m_container.classList.add('show');
});

close.addEventListener('click', () => {
    m_container.classList.remove('show');
});