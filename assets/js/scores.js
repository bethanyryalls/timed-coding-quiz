// doing on page load so ...
window.onload = function () {
    // setting variable for highscore ol
    var ol = document.getElementById("highscores");
    // for every item in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        // setting key as item in local storage
        var key = localStorage.key(i);
        // setting each item in local storage to scoreInitials variable
        var scoreInitials = JSON.parse(localStorage.getItem(key));
        // creating list item
        var li = document.createElement("li");
        // setting list item content to the scoreInitials object items
        li.textContent = scoreInitials.score + " - " + scoreInitials.initials;
        // adding each list item to the highscores ol
        ol.appendChild(li);

    }
};