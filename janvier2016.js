<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = getRandomMinMax(1,4);
var soins = getRandomMinMax(0,2);
var isDead = false;
var hasFullLife = true;

function attaque() {
    if(isDead){
        alert("Le monstre est déjà mort !");
    }
    else if(PV-degats <= 0){
        PV = 0;
        isDead = true;
        alert("Le monstre vient de mourir ! :-)");
    }
    else {
        PV = PV-degats;
        if(hasFullLife){
                hasFullLife = !hasFullLife;
        }
        alert("Le monstre a perdu "+degats+" PV. Il lui en reste "+PV);
    }
}

function soigne() {
    if(hasFullLife){
        alert("La santé du monstre est déjà pleine.");
    }
    else if(PV+soins >= 12){
        PV = 12;
        hasFullLife = true;
        alert("Le monstre a ses points de vie au maximum.");
    }
    else {
        PV = PV+soins;
        if(isDead){
                isDead = !isDead;
        }
        alert("Le monstre a gagné "+soins+" PV. Il en a maintenant "+PV);
    }
}

function getRandomMinMax(min,max)
{
    return Math.floor(Math.random()*(max-min))+min;
}

</script>
<button onclick="attaque()">Attaque</button>
<button onclick="soigne()">Soigne</button>
