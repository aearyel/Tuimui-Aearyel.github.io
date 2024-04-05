function showMessage(response) {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yes-button");
  const nameMessage = document.getElementById("name");
  const questionMessage = document.getElementById("question");
  const noMessage = document.getElementById("no-message");
  const yesMessage = document.getElementById("yes-message");

  if (response === "No") {
    noButton.style.position = "absolute";
    document.querySelector(".image").src = "images/ananas.jpg";
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
    questionMessage.textContent = "WRONG CHOICE BABY";
    nameMessage.style.display = "none";
    noMessage.style.display = "block";
    yesMessage.style.display = "none";
  }

  if (response === "Yes") {
    nameMessage.style.display = "none";
    noButton.style.display = "none";
    yesButton.style.display = "none";
    const customMessage = "DISCOVER THE NEW FASHION WITH TUI MUI";
    questionMessage.textContent = customMessage;
    yesMessage.style.display = "block";
    noMessage.style.display = "none";
    document.querySelector(".image").src = "images/ANANAS.JPG";
  }
}
