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
		square.move(square.x,square.y + 10);
	    } else if(up) {
		square.move(square.x,square.y - 10);
	    } else if(right) {
		square.move(square.x + 10,square.y);
	    } else if(left) {
		square.move(square.x - 10,square.y);
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
	function Square(x,y,next) {
	    this.x = x;
	    this.y = y;
	    this.next = next;
	    this.draw = function() {
		context.fillStyle = "black";
		context.fillRect(this.x,this.y,SQUARE_LENGTH,SQUARE_LENGTH);
	    };
	    this.move = function(X, Y) {
		if(Y > ZONE_JEU_HEIGHT-10 || Y < 0){
		    // on ne fait rien
		}
		else if(X > ZONE_JEU_WIDTH-10 || X < 0){
		    // on ne fait rien non plus
		}
		else {
		    // on va faire bouger notre suivant (si il y en a un) avant de bouger nous-même
		    if(this.next){
			this.next.move(this.x, this.y);
		    }
		    this.x = X;
		    this.y = Y;
		}
	    };
	},
	function Snake(head) {
	    this.head = head;
	    this.draw = function() {
		//on va dessiner tout le serpent
	    };
	    this.move = function(X, Y) {
		//on va faire bouger tout le serpent
	    };
	}
</script>

<h1>Jeu</h1>
<div id="conteneur">
	<canvas id="canvasElem" width="400" height="300">
		Votre navigateur ne supporte pas la fonctionnalité Canvas.
	</canvas>
</div>

