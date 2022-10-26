const board = document.querySelectorAll('.block')
const reloadButton = document.querySelector('.reload')
const playerTurn = document.querySelector('#player-turn')
let isPLayer1 = true, player = '×', isEnded = false, movements = 0

playerTurn.textContent = `Vez do ${player}`
// Adiciona o evento de click nas casas do tabuleiro
// Ao clicar, já faz a troca de jogadores
for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', function () {
        if (isEnded === false) {
            if (board[i].textContent === '') {
                board[i].textContent = player
                movements++
                endGame(player)
                isPLayer1 = !isPLayer1
                setPlayer()
                playerTurn.textContent = `Vez do ${player}`
            }
        }
    })
}

// Função para realizar a troca de jogadores
function setPlayer() {
    if (isPLayer1) {
        player = '×'
    } else {
        player = '〇'
    }
}

function endGame(player) {
    if ( // verifica as possibilidades de vitória
        board[0].textContent == player && board[1].textContent == player && board[2].textContent == player ||
        board[3].textContent == player && board[4].textContent == player && board[5].textContent == player ||
        board[6].textContent == player && board[7].textContent == player && board[8].textContent == player ||

        board[0].textContent == player && board[4].textContent == player && board[8].textContent == player ||
        board[2].textContent == player && board[4].textContent == player && board[6].textContent == player ||

        board[0].textContent == player && board[3].textContent == player && board[6].textContent == player ||
        board[1].textContent == player && board[4].textContent == player && board[7].textContent == player ||
        board[2].textContent == player && board[5].textContent == player && board[8].textContent == player
    ) {
        isEnded = true
        Swal.fire(
            'Fim de Jogo!',
            `Jogador ${player} venceu!`,
            'success'
        )
        return
    }
    if (movements > 8) {
        isEnded = true
        Swal.fire({
            title: 'Empate!',
            icon: 'success'
        })
    }
}

reloadButton.addEventListener('click', function () {
    window.location.reload()
})