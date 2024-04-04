function showMessage(response) {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yesButton");
  const nameMessage = document.getElementById("name");
  const questionMessage = document.getElementById("question");
  const noMessage = document.getElementById("no-message");
  const yesMessage = document.getElementById("yes-message");

  if (response === "No") {
    // Set button position to absolute
    noButton.style.position = "absolute";

    // Change image source to "ananas.jpg"
    document.querySelector(".image").src = "images/ananas.jpg";

    // Generate random coordinates within the visible container
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    questionMessage.textContent = "WRONG CHOICE BABY";
    nameMessage.style.display = "none";

    // Show no message and hide yes message
    noMessage.style.display = "block";
    yesMessage.style.display = "none";
  }

  if (response === "Yes") {
    // Hide name message and buttons
    nameMessage.style.display = "none";
    noButton.style.display = "none";
    yesButton.style.display = "none";

    // Update text content, show message, and change image source to "palaya.jpg"
    const customMessage = "DISCOVER THE NEW FASHION WITH TUI MUI";
    questionMessage.textContent = customMessage;

    // Show yes message and hide no message
    yesMessage.style.display = "block";
    noMessage.style.display = "none";
    
    document.querySelector(".image").src = "images/ANANAS.JPG";
  }
}
