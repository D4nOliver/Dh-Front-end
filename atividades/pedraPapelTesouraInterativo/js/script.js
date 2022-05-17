
function jogar() {

    var pontUs = 0
    var pontPc = 0



    const options = document.querySelectorAll('.selections button')
    const computerOptions = ['👊', '🖐', '✌']
    const resultPointerUs = document.querySelector('.results-score-us')
    const resultPointerPc = document.querySelector('.results-score-pc')
    const displayChoices = document.querySelector('div.choices')
    const computerNumber = Math.floor(Math.random() * 3)



    options.forEach(function (option) {
        option.addEventListener('click', function () {
            const computerNumber = Math.floor(Math.random() * 3)
            const computerChoice = computerOptions[computerNumber]
            compareHands(this.textContent, computerChoice)
            displayChoices.innerHTML += `
            <div class="result-selection">${this.textContent}</div>
            <div class="result-selection">${computerChoice}</div>`
    
            
        })
    })


    function compareHands(playerChoice, computerChoice) {

        const winner = document.querySelector('.winner')

        //check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'Empatou!!!'
            return

        }

        //Check for rock choice player
        if (playerChoice === '👊') {
            if (computerChoice === '✌') {
                winner.textContent = 'O jogador ganhou!!!'
                pontUs++
                resultPointerUs.textContent = pontUs
                return
            }

            else {
                winner.textContent = 'O computador ganhou!!!'
                pontPc++
                resultPointerPc.textContent = pontPc
                return
            }

        }

        if (playerChoice === '🖐') {
            if (computerChoice === '👊') {
                winner.textContent = 'O player ganhou!!!';
                pontUs++
                resultPointerUs.textContent = pontUs
                return
            }

            else {
                winner.textContent = 'O computador ganhou!!!'
                pontPc++
                resultPointerPc.textContent = pontPc
                return
            }
        }

        if (playerChoice === '✌'){
            if (computerChoice === '🖐') {
                winner.textContent = 'O player ganhou!!!';
                pontUs++
                resultPointerUs.textContent = pontUs
                return
            }

            else {
                winner.textContent = 'O computador ganhou!!!'
                pontPc++
                resultPointerPc.textContent = pontPc
                return

            }
        }

   }


}



    jogar();

