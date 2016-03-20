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

	// Variables
	var context;
	var boucleJeu;


	window.addEventListener('load', function () {
	    // On récupère l'objet canvas pour dessiner dedans
	    context = document.getElementById('canvasElem').getContext('2d');

	    // Boucle de rafraichissement du contexte 2D
	    boucleJeu = setInterval(refreshGame, 10);
	}, false);


	function refreshGame() {

	    // On efface la zone
	    context.clearRect(0, 0, ZONE_JEU_WIDTH, ZONE_JEU_HEIGHT);

	    // Puis on réaffiche le nécessaire

	}
</script>

<h1>Jeu</h1>
<div id="conteneur">
	<canvas id="canvasElem" width="400" height="300">
		Votre navigateur ne supporte pas la fonctionnalité Canvas.
	</canvas>
</div>

