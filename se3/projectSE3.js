// Bingo 

function playBingo() {
  // generarTablero
// mostrarTablero
// generarNumero
// comprobarNumero
// cambiarNumero
  
function playBingo(){
var bingo = {
  	randomN: function() {
  		var listNumbers = [];
    	while (listNumbers.length < 16) {
    	  var n =  Math.floor((Math.random() * 200) + 1);
    	  if (listNumbers.indexOf(n) === -1) {
    	  listNumbers.push(n);
    	  }
    	}
  		return listNumbers;
  	},
  	list: bingo.randomN(),
    createField: function() {
    	var bingoCard = [];
    	for (var i = 0; i < this.list.length; i++){
    	  bingoCard.push({
    	    number: list[i],
    	    matched: false
    	  });
    	}
    	return bingoCard;
    },
    showField: function() {
      var board = ' ';
      var numbers = this.createField();
      var m = 0;
      for (var i = 0; i < 5; i++) {
      	for (var j = 0; j < 3; j++) {
      	  board += ' ' + numbers[m].number;
      	  m++;
      	}
      	board += '\n ';
      }
      console.log(board);
    },
  };
  return bingo.showField();
}
   
playBingo();
