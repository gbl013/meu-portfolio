document.querySelectorAll('.ver-mais').forEach(function(botao) {
  botao.addEventListener('click', function() {
    const detalhes = this.nextElementSibling;
    if (detalhes.style.display === 'none') {
      detalhes.style.display = 'block';
      this.innerText = 'Ver menos';
    } else {
      detalhes.style.display = 'none';
      this.innerText = 'Ver mais';
    }
  });
});
