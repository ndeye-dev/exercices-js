
let nombre = parseInt(prompt("Veuillez saisir un nombre :"));


if (!isNaN(nombre)) {
    
    if (nombre % 3 === 0) {
        console.log(`${nombre} est divisible par 3.`);
    } else {
        console.log(`${nombre} n'est pas divisible par 3.`);
    }
} else {
    
    console.log("Veuillez saisir un nombre valide.");
}