<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;
var soins = 2;
var isDead = false;

function attaque() {
    if(isDead){
        alert("Le monstre est déjà mort !");
    }
    else if(PV-degats <= 0){ // le monstre n'est pas encore mort mais il le sera après l'attaque
        PV = 0;
        isDead = true; // on indique que maintenant le monstre est mort
        alert("Le monstre vient de mourir ! :-)");
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
        if(isDead){
                isDead = !isDead;
        }
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
