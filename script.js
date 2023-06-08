//your JS code here. If required.
function startGame(event){
	event.preventDefault();
	let form=document.getElementById("form1");
	let player1=form.player1.value;
	let player2=form.player2.value;
	console.log(player1, " and " ,player2)
	form.style.display="none";
	gameStart(player1);
	showBoard();
}

function showBoard(){
	let container=document.getElementById("container");
	let div=document.createElement("div");
	div.innerHTML=` <div class="grid-items" id="1"></div>
					<div class="grid-items" id="2"></div>
					<div class="grid-items" id="3"></div>
					<div class="grid-items" id="4"></div>
					<div class="grid-items" id="5"></div>
					<div class="grid-items" id="6"></div>
					<div class="grid-items" id="7"></div>
					<div class="grid-items" id="8"></div>
					<div class="grid-items" id="9"></div>`
    div.id="grid-container";
	container.append(div);

	let gridItems = document.getElementsByClassName("grid-items");

	// Add event listener to each grid item
	for (let i = 0; i < gridItems.length; i++) {
	  gridItems[i].addEventListener("click", startProcess);
	}
	
}

function gameStart(player1){
	let playerName=document.getElementById("playerName");
	playerName.innerText=`${player1}, you're up`;
}


let turn=0;
let count=0;
let gameOn=true;
let won=false;

function startProcess(event){
	let playerName=document.getElementById("playerName");
	let form=document.getElementById("form1");
	let player1=form.player1.value;
	let player2=form.player2.value;
	if(gameOn){
		count++;
		if(turn==0){
			event.srcElement.innerText="x";
			//playerName.innerText=player2+", you are up";
		}else{
			event.srcElement.innerText="o";
			//playerName.innerText=player1+", you are up";
		}
		won=checkWin();
		if(!won){
			if(turn==0){
				playerName.innerText=player2+", you're up";
			}else{
				playerName.innerText=player1+", you're up";
			}
		}else{
			let winner=playerName.innerText;
			if(winner.includes(player1)) playerName.innerText=player1+", congratulations you won!";
			else playerName.innerText=player2+" congratulations you won!";
		}
		if(turn==1){
			turn=0;
		}else{
			turn++;
		}
	}
	
	console.log(won);
	if(count==9 || won){
		gameOn=false;
	}	
	event.target.removeEventListener("click", startProcess);
}

function checkWin(){


	let gridItems = document.getElementsByClassName("grid-items");
	
	if(gridItems[0].innerText=='x' && gridItems[1].innerText=='x' && gridItems[2].innerText=='x'){
		setWinColor(gridItems[0],gridItems[1],gridItems[2])
		return true;
	} 
	if(gridItems[3].innerText=='x' && gridItems[4].innerText=='x' && gridItems[5].innerText=='x'){
		setWinColor(gridItems[3],gridItems[4],gridItems[5])
		return true;
	} 
	if(gridItems[6].innerText=='x' && gridItems[7].innerText=='x' && gridItems[8].innerText=='x'){
		setWinColor(gridItems[6],gridItems[7],gridItems[8])
		return true;
	} 
	if(gridItems[0].innerText=='x' && gridItems[4].innerText=='x' && gridItems[8].innerText=='x'){
		setWinColor(gridItems[0],gridItems[4],gridItems[8])
		return true;
	} 
	if(gridItems[2].innerText=='x' && gridItems[4].innerText=='x' && gridItems[6].innerText=='x'){
		setWinColor(gridItems[2],gridItems[4],gridItems[6])
		return true;
	}
	if(gridItems[0].innerText=='x' && gridItems[3].innerText=='x' && gridItems[6].innerText=='x'){
		setWinColor(gridItems[0],gridItems[3],gridItems[6])
		return true;
	} 
	if(gridItems[1].innerText=='x' && gridItems[4].innerText=='x' && gridItems[7].innerText=='x'){
		setWinColor(gridItems[1],gridItems[4],gridItems[7])
		return true;
	} 
	if(gridItems[2].innerText=='x' && gridItems[5].innerText=='x' && gridItems[8].innerText=='x'){
		setWinColor(gridItems[2],gridItems[5],gridItems[8])
		return true;
	} 

	if(gridItems[0].innerText=='o' && gridItems[1].innerText=='o' && gridItems[2].innerText=='o'){
		setWinColor(gridItems[0],gridItems[1],gridItems[2])
		return true;
	}
	if(gridItems[3].innerText=='o' && gridItems[4].innerText=='o' && gridItems[5].innerText=='o'){
		setWinColor(gridItems[3],gridItems[4],gridItems[5])
		return true;
	} 
	if(gridItems[6].innerText=='o' && gridItems[7].innerText=='o' && gridItems[8].innerText=='o'){
		setWinColor(gridItems[6],gridItems[7],gridItems[8])
		return true;
	}
	if(gridItems[0].innerText=='o' && gridItems[4].innerText=='o' && gridItems[8].innerText=='o'){
		setWinColor(gridItems[0],gridItems[4],gridItems[8])
		return true;
	}
	if(gridItems[2].innerText=='o' && gridItems[4].innerText=='o' && gridItems[6].innerText=='o'){
		setWinColor(gridItems[2],gridItems[4],gridItems[6])
		return true;
	}
	if(gridItems[0].innerText=='o' && gridItems[3].innerText=='o' && gridItems[6].innerText=='o'){
		setWinColor(gridItems[0],gridItems[3],gridItems[6])
		return true;
	} 
	if(gridItems[1].innerText=='o' && gridItems[4].innerText=='o' && gridItems[7].innerText=='o'){
		setWinColor(gridItems[1],gridItems[4],gridItems[7])
		return true;
	} 
	if(gridItems[2].innerText=='o' && gridItems[5].innerText=='o' && gridItems[8].innerText=='o'){
		setWinColor(gridItems[2],gridItems[5],gridItems[8])
		return true;
	} 

	return false;



}
function setWinColor(one,two,three){
	one.style.backgroundColor="purple";
	two.style.backgroundColor="purple";
	three.style.backgroundColor="purple";
}