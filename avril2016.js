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
	var square = new Square(100,100);

	// direction du serpent
	var up = true;
	var down = true;
	var left = true;
	var right = true;

	window.addEventListener('load', function () {
	    // On récupère l'objet canvas pour dessiner dedans
	    context = document.getElementById('canvasElem').getContext('2d');

	    // Boucle de rafraichissement du contexte 2D
	    boucleJeu = setInterval(refreshGame, 200);

	    window.document.onkeydown = deplacement;
	}, false);


	function refreshGame() {

	    // On efface la zone
	    context.clearRect(0, 0, ZONE_JEU_WIDTH, ZONE_JEU_HEIGHT);

	    if(down) {
		square.y = square.y + 10;
		if(square.y > ZONE_JEU_HEIGHT-10){
		    square.y = ZONE_JEU_HEIGHT-10;
		}
	    } else if(up) {
		square.y = square.y - 10;
		if(square.y < 0){
		    square.y = 0;
		}
	    } else if(right) {
		square.x = square.x + 10;
		if(square.x > ZONE_JEU_WIDTH-10){
		    square.x = ZONE_JEU_WIDTH-10;
		}
	    } else if(left) {
		square.x = square.x - 10;
		if(square.x < 0){
		    square.x = 0;
		}
	    }

	    square.draw();
	}

	function deplacement(e) {
	    up = false;
	    down = false;
	    left = false;
	    right = false;

	    if(e.keyCode == 40) {
		down = true;
	    } else if(e.keyCode == 38) {
		up = true;
	    } else if(e.keyCode == 39) {
		right = true;
	    } else if(e.keyCode == 37) {
		left = true;
	    }
	}
	function Square(x,y) {
	    this.x = x;
	    this.y = y;
	    this.draw = function() {
		context.fillStyle = "black";
		context.fillRect(this.x,this.y,SQUARE_LENGTH,SQUARE_LENGTH);
	    }
	}
</script>

<h1>Jeu</h1>
<div id="conteneur">
	<canvas id="canvasElem" width="400" height="300">
		Votre navigateur ne supporte pas la fonctionnalité Canvas.
	</canvas>
</div>

