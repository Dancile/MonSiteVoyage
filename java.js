const phrases = [
    "Bienvenue sur notre site",
    "Explorez nos services",
    "Contactez-nous pour en savoir plus",
    "Merci de nous rendre visite"
  ];
  
  let currentIndex = 0;
  
  // Fonction pour changer la phrase
  function changePhrase() {
    const headerText = document.querySelector('.header-text');
    headerText.textContent = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length; // Boucle sur les phrases
  }
  
  // Change la phrase toutes les 4 secondes
  setInterval(changePhrase, 4000);
  