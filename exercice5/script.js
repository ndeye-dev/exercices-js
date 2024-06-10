let lettre = prompt("Veuillez saisir une lettre :");


lettre = lettre.toLowerCase();


if (lettre.length === 1 && /^[a-zA-Z]+$/.test(lettre)) {
    
    if (["a", "e", "i", "o", "u"].includes(lettre)) {
        console.log(`${lettre} est une voyelle.`);
    } else {
        console.log(`${lettre} est une consonne.`);
    }
} else {

    console.log("Veuillez saisir une seule lettre alphabétique.");
}