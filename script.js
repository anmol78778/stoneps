// let choices = document.querySelectorAll(".choice")
// let you = document.querySelector(".you-div")
// let computer = document.querySelector(".computer-div")
// let result = document.querySelector(".result")

// function startshake() {
//     you.style = "animation: shake 1s linear 3;"
//     computer.style = "animation: shake 1s linear 3;"
// }

// function stopshake() {
//     you.style = "animation: none;"
//     computer.style = "animation: none;"
// }




// choices.forEach((choice) => {
//     choice.addEventListener('click', () => {
//         result.classList.remove("draw")
//         result.classList.remove("win")
//         result.classList.remove("lose")
//         result.innerText=""
//          let userChoice = choice.getAttribute("id")
//             let options = ["stone", "paper", "scissor"]
//             let compindex = Math.floor(Math.random() * 3)
//             let computerChoice = options[compindex]
//         startshake()
//         setInterval(() => {
//             stopshake()
//             plagame(userChoice, computerChoice)
//         }, 3000);
//     })
// })

// function plagame(userChoice, computerChoice) {
//     if (userChoice === "stone") {
//         you.innerText = "👊"
//     } else if (userChoice === "paper") {
//         you.innerText = "🤚"
//     } else {
//         you.innerText = "✌️"
//     }

//     if (computerChoice === "stone") {
//         computer.innerText = "👊"
//     } else if (computerChoice === "paper") {
//         computer.innerText = "🤚"
//     } else {
//         computer.innerText = "✌️"
//     }

//     if (userChoice === computerChoice) {
//         result.innerText = "Draw"
//         result.classList.add("draw")
//     }
//     else if (userChoice === "stone" && computerChoice === "scissor" || userChoice === "paper" && computerChoice === "stone" || userChoice === "scissor" && computerChoice === "paper") {
//         result.innerText = "You Win"
//         result.classList.add("win")
//     } else {
//         result.innerText = "You Loss"
//         result.classList.add("lose")
//     }
// }



let choices = document.querySelectorAll(".choice")
let you = document.querySelector(".you-div")
let computer = document.querySelector(".computer-div")
let result = document.querySelector(".result")

function startshake() {
    you.style.animation = "none"
    computer.style.animation = "none"

    // force reflow (important)
    you.offsetHeight
    computer.offsetHeight

    you.style.animation = "shake 1s linear 3"
    computer.style.animation = "shake 1s linear 3"
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        result.className = "result"
        result.innerText = ""

        let userChoice = choice.id
        let options = ["stone", "paper", "scissor"]
        let computerChoice = options[Math.floor(Math.random() * 3)]

        startshake()

        setTimeout(() => {
            playgame(userChoice, computerChoice)


            setTimeout(()=>{
                you.innerText="👊"
                computer.innerText="👊"
            },1500)
        }, 3000)
    })
})

function playgame(userChoice, computerChoice) {
    you.innerText = userChoice === "stone" ? "👊" : userChoice === "paper" ? "🤚" : "✌️"
    computer.innerText = computerChoice === "stone" ? "👊" : computerChoice === "paper" ? "🤚" : "✌️"

    if (userChoice === computerChoice) {
        result.innerText = "Draw"
        result.classList.add("draw")
    } else if (
        (userChoice === "stone" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        result.innerText = "You Win"
        result.classList.add("win")
    } else {
        result.innerText = "You Lose"
        result.classList.add("lose")
    }
}
