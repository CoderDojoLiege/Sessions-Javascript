<style type="text/css">
	body {background: #000;}
	#conteneur {width: 400px;height: 300px;border: 1px solid #333;
    			margin: 0 auto;background: #FFF;text-align: center;}
	h1 {text-align: center;font-variant: small-caps;color: #FFF;}
	p {text-align: center;font-variant: small-caps;color: #FFF;}
</style>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
	// Constantes du jeu

	// Largeur du jeu
	var ZONE_JEU_WIDTH = 400;
	// Hauteur du jeu
	var ZONE_JEU_HEIGHT = 300;

	var SQUARE_LENGTH = 10;

	// Variables
	var context;
	var boucleJeu;
	var squareX = 100;
	var squareY = 100;

	window.addEventListener('load', function () {
	    // On récupère l'objet canvas pour dessiner dedans
	    context = document.getElementById('canvasElem').getContext('2d');

	    // Boucle de rafraichissement du contexte 2D
	    boucleJeu = setInterval(refreshGame, 10);

	    window.document.onkeydown = deplacement;
	}, false);


	function refreshGame() {

	    // On efface la zone
	    context.clearRect(0, 0, ZONE_JEU_WIDTH, ZONE_JEU_HEIGHT);

	    // Puis on réaffiche le nécessaire
	    context.fillStyle = "black";
	    context.fillRect(squareX,squareY,SQUARE_LENGTH,SQUARE_LENGTH);

	}

	function deplacement(e) {
	    if(e.keyCode == 40) {
		squareY = squareY + 10;
		if(squareY > ZONE_JEU_HEIGHT-10){
		    squareY = ZONE_JEU_HEIGHT-10;
		}
	    } else if(e.keyCode == 38) {
		squareY = squareY - 10;
		if(squareY < 0){
		    squareY = 0;
		}
	    } else if(e.keyCode == 39) {
		squareX = squareX + 10;
		if(squareX > ZONE_JEU_WIDTH-10){
		    squareX = ZONE_JEU_WIDTH-10;
		}
	    } else if(e.keyCode == 37) {
		squareX = squareX - 10;
		if(squareX < 0){
		    squareX = 0;
		}
	    }
	}
</script>

<h1>Jeu</h1>
<div id="conteneur">
	<canvas id="canvasElem" width="400" height="300">
		Votre navigateur ne supporte pas la fonctionnalité Canvas.
	</canvas>
</div>

