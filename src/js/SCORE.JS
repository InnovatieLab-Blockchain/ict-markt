var topScores = [
                 {name:"Barack Obama", time:200},
                 {name:"Bernie Sanders", time:300},
                 {name:"Hillary Clinton", time:400},
                 {name:"Donald Trump", time:500},
                 {name:"Jeb Bush", time:600}
                 ]


function initGame(size) {
	// FR 1: achttien paren verdelen over een grid van 6x6 kaarten.achttien paren verdelen over een grid van 6x6 kaarten.
	initVars(size);
	vulSpeelveld(size);
	showScores();
}


function endGame(){
	var speelTijd = getSeconds() - startTijd;
	totaalTijd += speelTijd;
	aantalTijden++;
	if (topScores.length<4){
		updateTopScores(speelTijd);
	} else {
		if (speelTijd<=topScores[topScores.length-1].time){
			updateTopScores(speelTijd);
		}
	}
	//initGame($("#size").val());
	showScores();
}

function updateTopScores(speelTijd){
	var speelName = prompt("Gefeliciteerd, je staat in de top vijf! Please enter your name", "Harry Potter");
	for(var i = 0; i < topScores.length; i++) {
		if (speelTijd <= topScores[i].time) {
			var thisTime = topScores[i].time;
			var thisName = topScores[i].name;
			topScores[i].time = speelTijd;
			topScores[i].name=speelName;
			speelTijd = thisTime;
			speelName = thisName;
		}
	}
}

function showScores(){
	$('#topscores').html("");
	for(var i = 0; i < topScores.length; i++) {
		$('#topscores').append('<li>'+topScores[i].name+' : ' +
				topScores[i].time + '</li>');
	}
}


op html
<b>Top vijf</b>
<ol id="topscores"></ol>
