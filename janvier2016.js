<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;
var soins = 2;

function attaque() {
    PV = PV-degats;
    if(PV <= 0){
        alert("Le monstre est mort ! :-)");
    }
    else {
        alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    }
}

function soigne() {
    PV = PV+soins;
    if(PV >= 12){
        alert("Le monstre a ses points de vie déjà au maximum.");
    }
    else {
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
