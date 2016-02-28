<style type="text/css">
	body {
		background: #000;
	}
	#conteneur {
		width: 400px;
		height: 300px;
		border: 1px solid #333;
		margin: 0 auto;
		background: #FFF;
		text-align: center;
	}
	h1 {
		text-align: center;
		font-variant: small-caps;
		color: #FFF;
	}
	p {
		text-align: center;
		font-variant: small-caps;
		color: #FFF;
	}
</style>
<script type="text/javascript">
	// Constantes du jeu

	// Largeur des barres du jeu
	var BARRE_JEU_WIDTH = 10;
	// Hauteur des barres du jeu
	var BARRE_JEU_HEIGHT = 80;
	// De combien va se déplacer la barre quand on appuie sur une touche
	var PXL_DEPLA = 8;
	// Largeur du jeu
	var ZONE_JEU_WIDTH = 400;
	// Hauteur du jeu
	var ZONE_JEU_HEIGHT = 300;
	// Taille de la balle
	var DIMENSION_BALLE = 8;
	var VITESSE_BALLE = 2;


	// Variables
	var playerBarY; // Position en Y de la barre: Changement dynamique avec les touches du clavier
	var playerBarX; // Position en X de la barre: Ne bougera pas.
	var computerBarY;
	var computerBarX;
	var context;
	var balleX = 100;
	var balleY = 250;
	var dirBalleX = 1; // vers la droite
	var dirBalleY = -1; // vers le haut
	var boucleJeu;

	window.addEventListener('load', function () {
	    // On récupère l'objet canvas pour dessiner dedans
	    context = document.getElementById('canvasElem').getContext('2d');

	    // Initialisations des variables
	    playerBarX = ZONE_JEU_WIDTH-BARRE_JEU_WIDTH;
	    playerBarY = (ZONE_JEU_HEIGHT-BARRE_JEU_HEIGHT)/2;
	    computerBarX = 0;
	    computerBarY = playerBarY;

	    // Boucle de rafraichissement du contexte 2D
	    boucleJeu = setInterval(refreshGame, 10);

	    // Gestion des événements
	    window.document.onkeydown = deplacement;

	}, false);


	function refreshGame() {

	    // On efface la zone
	    context.clearRect(0, 0, ZONE_JEU_WIDTH, ZONE_JEU_HEIGHT);

	    // Puis on réaffiche le nécessaire


	    // Calcul de la nouvelle position de la balle

	    if ( (balleY + dirBalleY * VITESSE_BALLE) >  ZONE_JEU_HEIGHT) {
		dirBalleY = -1;
	    }
	    else if ( (balleY + dirBalleY * VITESSE_BALLE) <  0) {
		dirBalleY = 1;
	    }


	    // il faudrait savoir quand on perd
	    // et quand on gagne

	    if (mustRebond("left",computerBarX, computerBarY)){
		dirBalleX = 1;
		// change un peu la direction en fonction de comment la balle touche la barre.
		dirBalleY= 2*(balleY-(computerBarY+BARRE_JEU_HEIGHT/2))/BARRE_JEU_HEIGHT;
	    }
	    else {
		if (mustRebond("rigth",playerBarX, playerBarY)) {
		    dirBalleX = -1;
		    // change un peu la direction en fonction de comment la balle touche la barre.
		    dirBalleY= 2*(balleY-(playerBarY+BARRE_JEU_HEIGHT/2))/BARRE_JEU_HEIGHT;

                    // Vu qu on a pas perdu la balle, on pourrait ajouter des points à notre score.
		}
	    }

	    balleX = balleX + (VITESSE_BALLE*dirBalleX);
	    balleY = balleY + (VITESSE_BALLE*dirBalleY);

	    // la barre computer courre après la balle
	    computerBarY = calculComputerBarY();


	    // Réaffichage des barres
	    context.fillStyle = "#333333";
	    context.fillRect(playerBarX,playerBarY,BARRE_JEU_WIDTH,BARRE_JEU_HEIGHT);
	    context.fillStyle = "#333333";
	    context.fillRect(computerBarX,computerBarY,BARRE_JEU_WIDTH,BARRE_JEU_HEIGHT);


	    // Affichage de la balle
	    context.fillStyle = "#16A6DB";
	    context.beginPath();
	    context.arc(balleX, balleY, DIMENSION_BALLE, 0, Math.PI*2, true);
	    context.closePath();
	    context.fill();

	}

	function deplacement(e) {
	    // quand on appuie sur la touche du bas, on va en bas
	    if(e.keyCode == 40) {
		playerBarY = playerBarY + PXL_DEPLA;
		if(playerBarY + BARRE_JEU_HEIGHT > ZONE_JEU_HEIGHT) {
		    playerBarY = ZONE_JEU_HEIGHT - BARRE_JEU_HEIGHT;
		}

	    // quand on appuie sur la touche du haut, on va en haut
	    } else if(e.keyCode == 38) {
		playerBarY = playerBarY - PXL_DEPLA;
		if(playerBarY < 0) {
		    playerBarY = 0;
		}
	    }
	}


	// fonctions un peu compliquées.
	// On lui donne "rigth" (droite) ou "left" (gauche) avec le X et un Y d une barre et elle nous dit si la balle rebondit ou pas.
	// si la balle est au milieu du jeu, elle ne rebondira pas. Si elle touche un mur, oui.
	function mustRebond(type,playerX, playerY) {
	    var res;

	    // si on est à niveau "epaisseur" de la barre
	    if(type =="left"){
		res = (balleX + (dirBalleX * VITESSE_BALLE) < BARRE_JEU_WIDTH);
	    }
	    if(type =="rigth"){
		res = (balleX + (dirBalleX * VITESSE_BALLE) > (ZONE_JEU_WIDTH - BARRE_JEU_WIDTH));
	    }

	    // et si on est dans l'intervalle représenté par la barre...
	    var onTheBar = (balleY + (dirBalleY * VITESSE_BALLE) >= playerY)
                   && (balleY + (dirBalleY * VITESSE_BALLE) <= (playerY+BARRE_JEU_HEIGHT));

	    // ou si l espace entre la barre et le mur est inférieur au diametre de la balle
	    var betweenBarAndWall = (ZONE_JEU_HEIGHT - (playerY+BARRE_JEU_HEIGHT) < DIMENSION_BALLE)
                              && balleY > playerY;
	    betweenBarAndWall = betweenBarAndWall || ((playerY < DIMENSION_BALLE) && balleY < playerY+BARRE_JEU_HEIGHT);

	    res = res && (onTheBar || betweenBarAndWall);
	    return res;
	}

	function calculComputerBarY() {
	    // la barre computer courre après la balle
	    if(computerBarY+2*(BARRE_JEU_HEIGHT/3) < balleY){
		if ( (computerBarY+PXL_DEPLA+BARRE_JEU_HEIGHT) < ZONE_JEU_HEIGHT ) {
		    computerBarY += PXL_DEPLA;
		}
	    }
	    else if(computerBarY+(BARRE_JEU_HEIGHT/3) > balleY){
		if ( ((computerBarY-PXL_DEPLA)) > 0 ) {
		    computerBarY -= PXL_DEPLA;
		}
	    }
	    return computerBarY;
	}

</script>

<h1>Pong</h1>
<div id="conteneur">
	<canvas id="canvasElem" width="400" height="300">
		Votre navigateur ne supporte pas la fonctionnalité Canvas.
	</canvas>
</div>

