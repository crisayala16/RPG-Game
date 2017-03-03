$(document).ready(function(){
	var yourCharacter = $("#your-character");
	var enemiesToAttack = $("#enemies-to-attack");
	var defender = $("#defender");

	function fighter(hp, atk, cntr){
		this.health = hp;
		this.attack = atk;
		this.counterAttack = cntr;
	}

	var obiWan = new fighter(120, 9, 30);
	var luke = new fighter(100, 7, 27);
	var sidious = new fighter(150, 8, 29);
	var maul = new fighter(180, 12, 32);
	var characterPicked = false;
	var currentCharacter;
	var curretEnemy;


	$(".starting-box").on("click", function(){
		if(characterPicked === false){
			yourCharacter.html($(this));
			$("#starting-characters > .starting-box").addClass("enemy");
			for( var x = 0; x < 3; x++){
				enemiesToAttack.append($(".enemy"));
			};
			characterPicked = true;
		}
		else{
			$("#defender").html($(this));
			$(this).addClass("defender-box");

		}
	});

	$("#attack-button").on("click", function(){

	})

})