
let nombre = parseInt(prompt("Veuillez saisir un nombre :"));


if (!isNaN(nombre)) {
    
    if (nombre % 2 === 0) {
        console.log(`${nombre} est un nombre pair.`);
    } else {
        console.log(`${nombre} est un nombre impair.`);
    }
} else {
    
    console.log("Veuillez saisir un nombre valide.");
}
