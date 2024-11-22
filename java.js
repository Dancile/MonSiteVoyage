const phrases = [
    "Bienvenue sur notre site",
    "Explorez nos services",
    "Contactez-nous pour en savoir plus",
    "Merci de nous rendre visite"
  ];
  
  let currentIndex = 0;
  
  function changePhrase() {
    const headerText = document.querySelector('.header-text');
    headerText.textContent = phrases[currentIndex];
    currentIndex = (currentIndex + 1) % phrases.length; 
  }
  
des
  setInterval(changePhrase, 4000);
  