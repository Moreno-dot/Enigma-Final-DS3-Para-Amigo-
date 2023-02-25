let error = false;
const som = document.getElementById("som");
const playerDiv = document.querySelector('.player');
const closeButton = document.getElementById('close-btn');
let numErrors = 0;

function playAudio() {
  som.play();
}

function checkAnswer() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;
  var num5 = document.getElementById("num5").value;
  var result = document.getElementById("result").value;
  var numtry = 0;
  
  if (num1 === "17" && num2 === "9" && num3 === "11" && num4 === "1" && num5 === "9" && result === "101") {
    alert("Alegrai-vos, pois vós desvendastes o enigma!");
    window.location.href = "https://youtu.be/jWRgKolp7LQ";
  } else {
    alert("Ai de vós! A vossa resposta é equivocada. Ensaiai novamente.");
    document.body.classList.add("error");
    error = true;
    playAudio(); // reproduz a música
  }
  
  if (error === true){
    playerDiv.style.display = "block";
    document.getElementById("background-gif").style.display = "none";
  }
  
  closeButton.onclick = function() {
    playerDiv.style.display = "none";
  }

  playerDiv.onmousemove = function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const rect = playerDiv.getBoundingClientRect();
    const playerX = rect.left + rect.width / 2;
    const playerY = rect.top + rect.height / 2;
    const dx = x - playerX;
    const dy = y - playerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxWidth = document.body.clientWidth - rect.width / 2;
    const maxHeight = document.body.clientHeight - rect.height / 2;

    if (distance < 300) {
      const newX = Math.min(Math.max(rect.width / 2, playerX - dx / distance * 300), maxWidth);
      const newY = Math.min(Math.max(rect.height / 2, playerY - dy / distance * 300), maxHeight);
      playerDiv.style.left = newX + "px";
      playerDiv.style.top = newY + "px";
    }

    if (playerX <= 0 || playerX >= maxWidth || playerY <= 0 || playerY >= maxHeight) {
      const newX = Math.max(rect.width / 2, Math.min(maxWidth - rect.width / 2, Math.random() * maxWidth));
      const newY = Math.max(rect.height / 2, Math.min(maxHeight - rect.height / 2, Math.random() * maxHeight));
      playerDiv.style.left = newX + "px";
      playerDiv.style.top = newY + "px";
    }
  };
}

playerDiv.onmouseenter = function() {
  playerDiv.style.transform = "translate(-50%, -50%) scale(0.5)";
}

playerDiv.onmouseleave = function() {
  playerDiv.style.transform = "translate(-50%, -50%) scale(1)";
}
