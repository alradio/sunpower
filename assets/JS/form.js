
// Récupération de chaque formulaire
const formEnt = document.getElementById('formEnt');
const formParticulier = document.getElementById('formPart');
const formSyndic = document.getElementById('formSyndic');

let autorisationEnt = document.getElementById('autorisationEnt').checked;
let autorisationPart = document.getElementById('autorisationPart').checked;
let autorisationSyndic = document.getElementById('autorisationSyndic').checked;



// Récupération de l'emplacement du controle 
const repEntreprise = document.querySelector('.rep-entreprise');
const repParticulier = document.querySelector('.rep-particulier');
const repSyndic = document.querySelector('.rep-syndic');

const repEntreprisePos = document.querySelector('.rep-entreprisepos');
const repParticulierPos = document.querySelector('.rep-particulierpos');
const repSyndicPos = document.querySelector('.rep-Syndicpos');

//ecouteur qui se déclenche au submit du formulaire Entreprise
formEnt.addEventListener('submit', (e) => {
    //je transforme le formulaire Entreprise en objet FormData
    const formData = new FormData(formEnt);
    //j'initialise le booleen isNotComplete pour controler si le formulaire est complet ou non
    let isNotComlete = false;
    //je boucle sur chaque champs de mon formulaire
    //N.B : la fonction entries() renvoie un tableau de paires clé-valeur pour chaque entrée de la liste.
    for (var pair of formData.entries()) {
        // console.log(pair[0] + ': ' + pair[1]);
        //Si le champs est vide ou que la checkbox n'est pas cochée
        if ((pair[1] === undefined || pair[1] === '' || this.autorisationEnt.checked == false)) {
            //et si ce n'est pas un champs obligatoire
            if (pair[0] !== 'telephoneEnt' &&
                pair[0] !== 'cedexEnt' &&
                pair[0] !== 'descriptionEnt' &&
                pair[0] !== 'fonctionEnt') {
                //Je mémorise qu'il y a un champs non rempli, donc formulaire incomplet
                isNotComlete = true;
            }
        }
        //fin de la boucle
    }
    //si le formulaire est incomplet
    if (isNotComlete) {
        //j'insère un message 
        repEntreprise.innerHTML = 'Veuillez renseigner tous les champs obligatoires.';
        repEntreprisePos.innerHTML = '';
    } else {
        //sinon 
        repEntreprise.innerHTML = '';
        repEntreprisePos.innerHTML = 'Votre message est bien enregistré.';
    }
    e.preventDefault();
});


// Formulaire particulier
formParticulier.addEventListener('submit', (e) => {
    const formData = new FormData(formParticulier);
    let isNotComlete = false;
    for (var pair of formData.entries()) {
        if ((pair[1] === undefined || pair[1] === '' || this.autorisationPart.checked == false)) {
            if (pair[0] !== 'telephonePart' &&
                pair[0] !== 'cedexPart' &&
                pair[0] !== 'descriptionPart') {
                isNotComlete = true;
            }
        }
    }
    if (isNotComlete) {
        repParticulier.innerHTML = 'Veuillez renseigner tous les champs obligatoires.';
        repParticulierPos.innerHTML = '';
    } else {
        repParticulier.innerHTML = '';
        repParticulierPos.innerHTML = 'Votre message est bien enregistré.';
    }
    e.preventDefault();
});

// Formulaire syndic
formSyndic.addEventListener('submit', (e) => {
    const formData = new FormData(formSyndic);
    let isNotComlete = false;
    for (var pair of formData.entries()) {
        if ((pair[1] === undefined || pair[1] === '' || this.autorisationSyndic.checked == false)) {
            if (pair[0] !== 'telephoneSyndic' &&
                pair[0] !== 'cedexSyndic' &&
                pair[0] !== 'descriptionSyndic' &&
                pair[0] !== 'fonctionSyndic') {
                isNotComlete = true;
            }
        }
    }
    if (isNotComlete) {
        repSyndic.innerHTML = 'Veuillez renseigner tous les champs obligatoires.';
        repSyndicPos.innerHTML = '';
    } else {
        repSyndic.innerHTML = '';
        repSyndicPos.innerHTML = 'Votre message est bien enregistré';
    }
    e.preventDefault();
});
