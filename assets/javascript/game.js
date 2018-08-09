//global variables
var wins = 0;
var losses = 0;
var totalScore;
var targetNumber;
var rainbowNumber;
var anglerNumber;
var ospreyNumber;
var plantNumber;


function set() {
    targetNumber = Math.floor(19 + Math.random() * 101);
    rainbowNumber = Math.floor(1 + Math.random() * 11);
    anglerNumber = Math.floor(1 + Math.random() * 11);
    ospreyNumber = Math.floor(1 + Math.random() * 11);
    plantNumber = Math.floor(1 + Math.random() * 11);
    totalScore = 0;

    $("#targetNumber").text("Target Number: " + targetNumber);
    $("#userTotal").text("Total Score: " + totalScore);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

}


$(document).ready(function () {
    set();

    if (totalScore < targetNumber) {

        $("#char-rainbow").on("click", function () {
            totalScore += rainbowNumber;
            $("#userTotal").text("Total Score: " + totalScore);
            if (totalScore == targetNumber) {
                wins++;
                $("#status").text("Congratulations, you win!");
                set();
            }
            else if (totalScore > targetNumber) {
                losses++;
                $("#status").text("Sorry, you went over! Play Again.");
                set();
            }
        });
        $("#char-osprey").on("click", function () {
            totalScore += ospreyNumber;
            $("#userTotal").text("Total Score: " + totalScore);
            if (totalScore == targetNumber) {
                wins++;
                $("#status").text("Congratulations, you win!");
                set();
            }
            else if (totalScore > targetNumber) {
                losses++;
                $("#status").text("Sorry, you went over! Play Again.");
                set();
            }
        });
        $("#char-angler").on("click", function () {
            totalScore += anglerNumber;
            $("#userTotal").text("Total Score: " + totalScore);
            if (totalScore == targetNumber) {
                wins++;
                $("#status").text("Congratulations, you win!");
                set();
            }
            else if (totalScore > targetNumber) {
                losses++;
                $("#status").text("Sorry, you went over! Play Again.");
                set();
            }
        });
        $("#char-plant").on("click", function () {
            totalScore += plantNumber;
            $("#userTotal").text("Total Score: " + totalScore);
            if (totalScore == targetNumber) {
                wins++;
                $("#status").text("Congratulations, you win!");
                set();
            }
            else if (totalScore > targetNumber) {
                losses++;
                $("#status").text("Sorry, you went over! Play Again.");
                set();
            }
        });
    }

});
