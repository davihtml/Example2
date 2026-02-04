document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const img = document.getElementById('imagem1');

    btn.addEventListener('click', () => {
        if (img.style.display === 'none' || img.style.display === '') {
            img.style.display = 'block';
            btn.textContent = 'Esconder imagem';
        } else {
            img.style.display = 'none';
            btn.textContent = 'Mostrar imagem';
        }
    });
});