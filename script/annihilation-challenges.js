let challenge_goal_ac_base=ExpantaNum.pow(10,2000);
let challenge_goal_ac_scale=2;
function ac(i){
	if(game.annihilation.inchallenge[i-1]==0){
		game.annihilation.inchallenge[i-1] = 1;
		document.getElementById("ac"+i+"b").value="退出挑战";
		annihilation();
	}else{
		while(game.annihilation.challenged[i-1] < 255&&ExpantaNum(game.eternity.number).gte(ExpantaNum(challenge_goal_ac_base).pow(ExpantaNum.times(challenge_goal_ac_scale,game.annihilation.challenged[i-1])))){
			game.annihilation.challenged[i-1]+=1;
			document.getElementById("ac"+i).style.backgroundColor="rgb(" + (255-game.annihilation.challenged[i-1]) + "," + game.annihilation.challenged[i-1] + ",0)";
		}
		annihilation();
		document.getElementById("ac"+i+"b").value="开始挑战";
		game.annihilation.inchallenge[i-1] = 0;
	}
}
function annihilation_fill(i){
	if(ExpantaNum(game.annihilation.barfilled[i-1]).lt(ExpantaNum.pow(10,10000))){
		if(ExpantaNum(game.annihilation.barfilled[i-1]).add(game.annihilation.number).lte(ExpantaNum.pow(10,10000))){
			game.annihilation.barfilled[i-1]=ExpantaNum(game.annihilation.barfilled[i-1]).add(game.annihilation.number);
			game.annihilation.number=0;
		}else{
			game.annihilation.barfilled[i-1]=ExpantaNum.pow(10,10000);
			game.annihilation.number=ExpantaNum(game.annihilation.number).minus(ExpantaNum.pow(10,10000)).add(game.annihilation.barfilled[i-1]);
		}

	}
}