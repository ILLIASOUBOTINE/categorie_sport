let nom;

while (!nom) {
  nom = prompt("Entrez votre age");
  if (nom.length !== 0) {
     let numNom = Number(nom);
     console.log(numNom);

     if (numNom >= 12 && numNom <= 17) {
      alert("« Cadet » ");
     }else {
      switch(numNom) {
      case 6:
      case 7:
        alert("« Poussin » ");
        break;
      case 8:
      case 9:
        alert("« Pupille » ");
        break;
      case 10:
      case 11:
        alert("« Minime » ");
        break;  
      default:
        alert("faute");
     }
     
    }
    
  } else {
    alert("le champ ne doit pas être vide");
    nom = false;
  }
}
