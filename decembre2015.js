<script>

var bonbons = 12;

function mange() {
    bonbons = bonbons-1;
    if(bonbons <= 0){
        alert("Il n'y a plus de bonbons ! :'(");
    }
    else {
        alert(bonbons);
    }
}
</script>
<button onclick="mange()">Manger</button>
