document.querySelectorAll('.section').forEach(section => {
    const products = section.querySelectorAll('.product-card');
    const btn = section.querySelector('.voir-plus-btn');
    let visibleCount = 2; // initial : afficher 2 produits
  
    // Masquer tous les produits au-delà de visibleCount
    products.forEach((prod, idx) => {
      if (idx >= visibleCount) prod.style.display = 'none';
    });
  
    // Au clic du bouton
    btn.addEventListener('click', () => {
      const total = products.length;
      const newVisibleCount = visibleCount + 2; // afficher 2 de plus à chaque clic
  
      products.forEach((prod, idx) => {
        if (idx < newVisibleCount) prod.style.display = 'block';
      });
  
      visibleCount = newVisibleCount;
  
      // Si tous les produits sont visibles, on masque le bouton
      if (visibleCount >= total) {
        btn.style.display = 'none';
      }
    });
  });
 

  