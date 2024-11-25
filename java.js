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
  

 
const reponse=await fetch("pieces-autos.json");
const pieces =await reponse.json();
const article= pieces [0];


imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;
  