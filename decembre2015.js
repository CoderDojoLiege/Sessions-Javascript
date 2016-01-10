<script>

// PV veut dire Points de Vie
var PV = 12;
var degats = 3;

function attaque() {
    PV = PV-degats;
    if(PV <= 0){
        alert("Le monstre est mort ! :-)");
    }
    else {
        alert("Le monstre a perdu "+degats+". Il lui en reste "+PV);
    }
}
</script>
<button onclick="attaque()">Attaque</button>
