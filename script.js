var center = document.createElement('center'); 

var table = document.createElement('table');
var count =1;
for (var i = 0; i < 10; i++) { 

    var row = document.createElement('tr'); 
    for (var j = 0; j < 10; j++) { 

        var cell = document.createElement('td'); 

        if ((i + j) % 2 == 0) { 
            cell.setAttribute('class', 'cell whitecell'); 
            row.appendChild(cell); 
        } 
        else { 
            cell.setAttribute('class', 'cell blackcell'); 
            row.appendChild(cell); 
        }
		cell.textContent = count;
		count++;
    } 

    table.appendChild(row); 
} 
center.appendChild(table); 

table.setAttribute('cellspacing', '0'); 
table.setAttribute('width', '100%');
table.style.height = "550px";
document.body.appendChild(center);

let buttons = document.createElement("div");
buttons.classList.add("buttons");
let dice = document.createElement("button");
dice.id = "dice";
dice.textContent = "DICE";

let reset = document.createElement("button");
reset.id = "reset";
reset.textContent = "RESET";

buttons.appendChild(dice);
buttons.appendChild(reset);
document.body.appendChild(buttons);

let diceresult = document.createElement("span")
diceresult.id = "diceres";
buttons.appendChild(diceresult);
let value = 1;

dice.addEventListener('click', () => {
    value = Math.floor(Math.random() * 6) + 1;
    diceresult.innerText = `Dice Result=${value}`;
    moveCircle(value);
});

let totalind=0;

reset.addEventListener('click', () => {
    value = 1;
	alert('The game has been reseted.');
	diceresult.innerText = `Dice Result reseted =${value}`;
    totalind=0;
    td[0].appendChild(redCircle);
});

buttons.appendChild(diceresult);

let td=document.querySelectorAll('td');
console.log(td)

let redCircle = document.createElement("div");
redCircle.id = "circle";
td[0].appendChild(redCircle);

function moveCircle(steps) {
	if(totalind+steps<100){
	   td[totalind+steps].appendChild(redCircle);
	   totalind+=steps;
	}
	if(totalind==99){
	   td[99].appendChild(redCircle);
	   alert('Congratulations! You won the game.')
	}
   }