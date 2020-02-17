var randItem
var chosenItem
var winner
var count = 0

wordEmoji = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️',
}

function randomItem() {
    var rand = Math.floor(Math.random() * 3)

    switch (rand) {
        case 0:
            randItem = "rock"
            break
        case 1:
            randItem = "paper"
            break
        case 2:
            randItem = "scissors"
    }
}

function setItem(value) {
    chosenItem = value
    startGame()
}

function startGame() {
    count += 1
    randomItem()
    const computer = wordEmoji[randItem];
    if (chosenItem == null) {
        document.getElementById('winner').innerHTML = "You need to pick an item to play the game!"
    }
    else if (randItem == "rock" && chosenItem == "scissors" || randItem == "paper" && chosenItem == "rock" || randItem == "scissors" && chosenItem == "paper") {
        document.getElementById('winner').innerHTML = "Computer played " + computer + " computer wins"
        winner = "computer"
        showGameHistory()
    } else if (randItem == chosenItem) {
        document.getElementById('winner').innerHTML = "Computer played " + computer + " It's a tie!"
        winner = "its a tie"
        showGameHistory()
    } else {
        document.getElementById('winner').innerHTML = "Computer played " + computer + " you are the winner! ⭐️🌟🎉"
        winner = "human"
        showGameHistory()
    }

    chosenItem = null
}

function showGameHistory() {
    var div = document.getElementById("gameHistory")
    var table = div.querySelector("table")
    div.style.display = "";
    var row = table.insertRow(1)
    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1)
    var cell2 = row.insertCell(2)
    var cell3 = row.insertCell(3)

    cell0.innerHTML = count
    cell1.innerHTML = chosenItem
    cell2.innerHTML = randItem
    cell3.innerHTML = winner
}