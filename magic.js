//Questions
var questions = [
	{
		Q: "1. Sirius Black is Harry Potter's ...",
		A: "godfather"
	},
	{
		Q: "2. What spell disarms a wizard of their wand?",
		A: "expelliarmus"
	},
	{
		Q: "3. What is the name of the most powerful wand that ever existed?",
		A: "elder wand"
	},
	{
		Q: "4. Hedwig is Harry Potter's ...?",
		A: "owl"
	},
	{
		Q: "5. Harry has a ... bolt scar on his forehead.",
		A: "lightning"
	},
	{
		Q: "6. Hagrid is half ... half human.",
		A: "giant"
	},
	{
		Q: "7. Hermione's last name is ...",
		A: "granger"
	},
	{
		Q: "8. Harry uses the cloak of ... to sneak around Hogwarts.",
		A: "invisibility"
	},
	{
		Q: "9. Hermione has a cat named ...",
		A: "crookshanks"
	},
	{
		Q: "10. Peter Pettigrew's nickname was ...",
		A: "wormtail"
	}
]
//Dispay Questions
for(i = 0; i < questions.length; i++) {
	document.getElementById('label' + i).innerHTML = questions[i].Q
}
//Check Answers
function checkAnswers() {
	var correct = 0
	var incorrect = 0
	for(i = 0; i < questions.length; i++) {
		var input = document.getElementById('input' + i).value.toLowerCase()
		if (input == questions[i].A) {
			correct++
			document.getElementById('label' + i).className = 'correct'
		} else {
			incorrect++
			document.getElementById('label' + i).className = 'incorrect'
		}
	}
	document.getElementById('correct').innerHTML = correct
	document.getElementById('incorrect').innerHTML = incorrect
}