// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"


const notes = [12, 14, 10, 8, 16]; //le tableau avec les 5 nombres


/*apres analyse du retour des erreurs, je constate qu'il y a au total 3 cas :
	1) si on a un tableau vide, sans elements
	2) si la moyenne est >= a 10
	3) si la moyenne est < a 10



*/

function averageNote(notes) {
	if (notes.length === 0) { 
	  return "Échoué";
	}
  
	let somme = 0; //initialisation de la somme du tableau pour la boucle FOR
	for (let i = 0; i < notes.length; i++) {
	  somme += notes[i];
	}
  
	const moyenne = somme / notes.length; // calcul de la moyenne
	if (moyenne >= 10) {
	  return "Réussi";  //reussite
	} else {
	  return "Échoué"; //echec
	}
  }
  
  module.exports = { //exportation de la fonction pour matcher avec le test preetabli
	averageNote,
  };
  
