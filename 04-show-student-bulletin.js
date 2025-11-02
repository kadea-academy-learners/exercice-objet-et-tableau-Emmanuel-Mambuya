// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
let eleves = [
	{ nom: "Jack", notes: [14, 12, 9] },
	{ nom: "Hugo", notes: [] },
	{ nom: "Eva", notes: [16, 9, 19] },
	{ nom: "David", notes: [2, 11, 13] },
	{ nom: "Claire", notes: [9, 19, 17] },
	{ nom: "Gina", notes: [18, 18, 17] },
	{ nom: "Fred", notes: [7, 10, 17] },
	{ nom: "Bob", notes: [19, 11, 12] },
	{ nom: "Isa", notes: [11, 12, 10] },
  ];
  
  function showStudentBulletin(eleves) {
	let bulletins = [];
  
	for (let i = 0; i < eleves.length; i++) {
	  let notes = eleves[i].notes;
	  let somme = 0;
  
	  // Cas sans notes
	  if (notes.length === 0) {
		bulletins.push({
		  nom: eleves[i].nom,
		  moyenne: 0,
		  commentaire: "À revoir",
		});
		continue;
	  }
  
	  // Somme des notes
	  for (let j = 0; j < notes.length; j++) {
		somme += notes[j];
	  }
  
	  // Calcul moyenne arrondie
	  let moyenne = somme / notes.length;
	  moyenne = parseFloat(moyenne.toFixed(2));
  
	  // Les commentaires a faire pour chaque situation de l'eleve
	  let commentaire = "";
	  if (moyenne >= 16) commentaire = "Excellent";
	  else if (moyenne >= 14) commentaire = "Très Bien";
	  else if (moyenne >= 12) commentaire = "Bien";
	  else if (moyenne >= 10) commentaire = "Passable";
	  else commentaire = "À revoir";
  
	  // Ajouter dans le tableau
	  bulletins.push({
		nom: eleves[i].nom,
		moyenne: moyenne,
		commentaire: commentaire,
	  });
	}
  
	return bulletins;
  }
  
  // Exemple d’affichage
  console.log(showStudentBulletin(eleves));
  
  module.exports = { showStudentBulletin };
  