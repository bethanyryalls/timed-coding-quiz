// setting variable for highscores list
ol = document.getElementById('highscores');

var lastScoreInitials = JSON.parse(localStorage.getItem("scoreInitials"));

var li = document.createElement("li");
li.textContent = lastScoreInitials.score + " - " + lastScoreInitials.initials;

ol.appendChild(li);