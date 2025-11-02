// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

const users = [
	{ nom: "Alice", age: 55, estAdmin: true },
	{ nom: "Charlie", age: 27, estAdmin: false },
  ];
  
  function whoIsAdmin(users) {
	if (users.length === 0) { // si le tableau est vide
	  return []; 
	}
  
	const administrateurs = []; // constante pour y mettre les noms des admins
  
	for (let i = 0; i < users.length; i++) {
	  if (users[i].estAdmin === true) {
		administrateurs.push(users[i].nom); // ajoute le nom d'administrateur au tableau
	  }
	}
  
	return administrateurs; // retourner le tableau des admins
  }
  
  module.exports = {
	whoIsAdmin,
  };
  