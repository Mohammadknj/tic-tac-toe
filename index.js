let houses = [];
let houses_result = [];
let random = 0;
let FinishedOneTurn = false;
let FinishedGame = false;
let counter = 0;
let WinRate = null;
while (WinRate == null) {
  WinRate = prompt("Enter number of points to win:");
}
document.getElementById("Click-to-start-text").textContent +=
  "(" + WinRate + " points to win)";
for (let i = 1; i <= 9; i++) {
  houses[i - 1] = document.getElementById(`house ${i}`);
  houses_result[i - 1] = i; //initializing to change undefined to another thing
}

for (let i = 0; i < 9; i++) {
  houses[i].addEventListener("click", () => {
    //Check_finised();
    if (FinishedOneTurn == false) {
      document.getElementById("Click-to-start-text").textContent = "";
    }
    if (FinishedOneTurn == false) {
      if (houses[i] != null) {
        houses[i].classList.add("cross");
        houses[i] = null;
        houses_result[i] = "You";
        counter++;
        Check_finised();
        if (FinishedOneTurn == false) {
          while (true) {
            random = Math.floor(Math.random() * 9);
            if (houses[random] != null) {
              houses[random].classList.add("circle");
              break;
            }
          }
          houses[random] = null;
          houses_result[random] = "CPU";
          Check_finised();
        }
      }
    }
  });
}
function Check_finised() {
  if (counter > 2) {
    //vertical check
    for (i = 0; i < 3; i++) {
      if (
        houses_result[i] == houses_result[i + 3] &&
        houses_result[i + 3] == houses_result[i + 6]
      ) {
        FinishedOneTurn = true;
        document.getElementById("refresh-button").style.display =
          "inline-block";
        document.getElementById("Click-to-start-text").textContent =
          houses_result[i] + " Won! Congratulation!";
        document.getElementById(`${houses_result[i]}`).textContent++;
        //        return;
      }
    }
    //horizental check
    for (let i = 0; i <= 6; i += 3) {
      if (
        houses_result[i] == houses_result[i + 1] &&
        houses_result[i + 1] == houses_result[i + 2]
      ) {
        FinishedOneTurn = true;
        document.getElementById("refresh-button").style.display =
          "inline-block";
        document.getElementById("Click-to-start-text").textContent =
          houses_result[i] + " Won! Congratulation!";
        document.getElementById(`${houses_result[i]}`).textContent++;
        //return;
      }
    }
    if (
      houses_result[0] == houses_result[4] &&
      houses_result[0] == houses_result[8]
    ) {
      FinishedOneTurn = true;
      document.getElementById("refresh-button").style.display = "inline-block";
      document.getElementById("Click-to-start-text").textContent =
        houses_result[4] + " Won! Congratulation!";
      document.getElementById(`${houses_result[4]}`).textContent++;
      //return;
    }
    if (
      houses_result[2] == houses_result[4] &&
      houses_result[4] == houses_result[6]
    ) {
      FinishedOneTurn = true;
      document.getElementById("refresh-button").style.display = "inline-block";
      document.getElementById("Click-to-start-text").textContent =
        houses_result[4] + " Won! Congratulation!";
      document.getElementById(`${houses_result[4]}`).textContent++;
      //return;
    }
  }
  if (!FinishedOneTurn) {
    let cnt = 0;
    for (let i = 0; i < 9; i++) {
      if (houses[i] == null) cnt++;
    }
    if (cnt == 9) {
      FinishedOneTurn = true;
      document.getElementById("refresh-button").style.display = "inline-block";
      document.getElementById("Click-to-start-text").textContent =
        "Equal! No one won";
      //return;
    }
  }
  if (FinishedOneTurn) Check_finised_Game();
}
document.getElementById("refresh-button").addEventListener("click", () => {
  if (FinishedGame) location.reload();
  else {
    document.getElementById("Click-to-start-text").textContent = "";
    document.getElementById("refresh-button").style.display = "none";
    for (let i = 1; i <= 9; i++) {
      houses[i - 1] = document.getElementById(`house ${i}`);
      houses[i - 1].classList = "";
      houses_result[i - 1] = i;
    }
    FinishedOneTurn = false;
    counter = 0;
  }
});
function Check_finised_Game() {
  console.log("game");
  let UserPoint = document.getElementById("You").textContent;
  let CPUpoint = document.getElementById("CPU").textContent;
  console.log(UserPoint);
  console.log(CPUpoint);
  if (Math.max(UserPoint, CPUpoint) == WinRate) {
    let winner;
    if (WinRate == UserPoint) winner = "You";
    else winner = "CPU";
    console.log(100);
    document.getElementById(`${winner}player`).style.backgroundColor = "yellow";
    FinishedGame = true;
    document.getElementById("refresh-button").textContent='Reload'
  }
}
