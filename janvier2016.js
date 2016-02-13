<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;
var soins = 2;

function attaque() {
    if(PV-degats <= 0){ //cela veut dire que le monstre sera mort après l attaque.
        PV = 0; // si il est mort, on ne veut pas de PV dans le négatifs. On mets donc les PV à 0.
        alert("Le monstre est mort ! :-)");
    }
    else {
        PV = PV-degats;
        alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    }
}

function soigne() {
    if(PV+soins >= 12){ //cela veut dire que le monstre sera en pleine santé après le soin.
        PV = 12; // On mets donc les PV au maximum.
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        PV = PV+soins;
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
