function playBingo() {

    var bingoCard = [];
    var listNumbers = [];
    var arr = [];
    var count = 0;
    var randomNumbers = [];
    var bingo = {

        // Generates a random list of numbers
        randomN: function() {
            while (listNumbers.length < 15) {
                var n = Math.floor((Math.random() * 200) + 1);
                if (listNumbers.indexOf(n) === -1) {
                    listNumbers.push(n);
                }
            }
        },
        // Creates a bingo card 
        createCard: function() {
            for (var i = 0; i < listNumbers.length; i++) {
                bingoCard.push({
                    number: listNumbers[i],
                    matched: false
                });
            }
            // generates an array with arrays with the format 3x5
            for (var j = 0; j < bingoCard.length; j += 3) {
                arr.push(bingoCard.slice(j, j + 3));
            }
        },
        // alert the card formatted 3x5
        showCard: function(array) {
            var card = ' ';
            var m = 0;
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 3; j++) {
                    card += ' ' + array[m].number;
                    m++;
                }
                card += '\n ';
            }
            alert(card);
        },
        // main function, generates a number and call the check function while we still confirm the play or until we win
        play: function() {
            var stillPlaying = true;
            while (stillPlaying) {
                var rnd = Math.floor((Math.random() * 200) + 1);
                // if the random number is repeated, we generate another one.
                while (randomNumbers.indexOf(rnd) !== -1) {
                    rnd = Math.floor((Math.random() * 200) + 1);
                }
                randomNumbers.push(rnd);
                alert('Your number is: ' + rnd);
                this.check(rnd);
                if (!this.result()) {
                    stillPlaying = confirm('Continue?');
                } else {
                    stillPlaying = false;
                }
            }
        },
        // function that check if the number is in the card, if it is, then it changes the matched property to true and the number to 'X'
        check: function(n) {
            bingoCard.forEach(function(number) {
                if (number.number == n) {
                    number.matched = true;
                    number.number = 'X';
                }
            });
            this.showCard(bingoCard);
            this.line(arr);
        },
        // it checks if there is a line
        line: function(card) {
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < 3; j++) {
                    if (arr[i][j].matched === true) {
                        count++;
                        arr[i][j] = 'line';
                    } else if (count === 3) {
                        alert('LINE!!!!');
                        count = 0;
                    }
                }
            }
        },
        // check if we matched all the numbers, and then we show the alert
        result: function() {
            var win = arr.every(function(array) {
                return array.every((el) => el === 'line');
            });
            if (win) alert('BINGO!!!!!');
            return win;
        },
        // wraps the functions
        init: function() {
            bingo.randomN();
            bingo.createCard();
            bingo.play();
        }
    };
    bingo.init();
}
playBingo();
