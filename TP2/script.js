window.addEventListener("load", init);

function init() {

	document.getElementById("add").addEventListener("click", add);

	horloge();
}

function horloge() {
	var hour = document.getElementById("hour");

	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes()
	var s = date.getSeconds();

	if (h < 10) h = "0" + h;
	if (m < 10) m = "0" + m;
	if (s < 10) s = "0" + s;

	hour.textContent = h + ":" + m + ":" + s;

	setTimeout('horloge()', 1000);
}

function add() {
	var alarm = document.getElementsByClassName('alarm')[0];

	var div = document.createElement('div');
	div.id = "div";

	var checkboxInput = document.createElement('input');
	checkboxInput.id = "checkboxInput";
	checkboxInput.type = "checkbox";
	checkboxInput.addEventListener("click", createAlarm);

	var hourInput = document.createElement('input');
	hourInput.id = "hourInput";
	hourInput.type = "number";
	hourInput.min = 0;
	hourInput.max = 23;
	hourInput.defaultValue = 0;
	hourInput.addEventListener("change", createAlarm);

	var txt = document.createElement('p');
	txt.id = "txt";
	txt.textContent = ":";

	var minuteInput = document.createElement('input');
	minuteInput.id = "minuteInput";
	minuteInput.type = "number";
	minuteInput.min = 0;
	minuteInput.max = 59;
	minuteInput.defaultValue = 0;
	minuteInput.addEventListener("change", createAlarm);

	var nomInput = document.createElement('input');
	nomInput.id = "nomInput";

	var musicInput = document.createElement('select');
	musicInput.id = "musicInput";

	var music1 = document.createElement('option');
	music1.value = 1;
	music1.text = "Naruto";

	var music2 = document.createElement('option');
	music2.value = 2;
	music2.text = "Code Lyoko";

	var music3 = document.createElement('option');
	music3.value = 3;
	music3.text = "One Piece";

	musicInput.add(music1, null);
	musicInput.add(music2, null);
	musicInput.add(music3, null);


	var deleteInput = document.createElement('button');
	deleteInput.id = "deleteInput";
	deleteInput.textContent = "-";

	deleteInput.addEventListener("click", function () {
		alarm.removeChild(div);
	});

	div.appendChild(checkboxInput);
	div.appendChild(hourInput);
	//div.appendChild(txt);
	div.appendChild(minuteInput);
	div.appendChild(nomInput);
	div.appendChild(musicInput);
	div.appendChild(deleteInput);

	alarm.appendChild(div);

}

function createAlarm() {

	var hourInput = document.getElementById("hourInput");
	var minuteInput = document.getElementById("minuteInput");

	var timeMinute = hourInput.value * 60 + minuteInput;

	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();

	var timeNow = h * 60 + m;

	var timeLeft;
	if (timeNow - timeMinute > 0) timeLeft = timeNow - timeMinute;
	else timeLeft = timeNow - timeMinute + 24 * 60;


	setTimeout('alarm()', timeLeft * 60000);
}

function alarm() {

	var checkboxInput = document.getElementById("checkboxInput");

	if (checkboxInput.checked == true) {

		var hourInput = document.getElementById("hourInput").value;
		var minuteInput = document.getElementById("minuteInput").value;

		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();

		if (hourInput == h && minuteInput == m) {
			var audio = document.createElement('audio');
			audio.id = "audio";

			var musicInput = document.getElementById("musicInput");

			if (musicInput.value == "1") audio.src = "Naruto.mp3";
			else if (musicInput.value == 2) audio.src = "CodeLyoko.mp3";
			else if (musicInput.value == 3) audio.src = "OnePiece.mp3";

			audio.play();

			alert(document.getElementById("nomInput").value);
			setTimeout('stopMusic()', 10000);
		}
	}


}

function stopMusic() { 
	var audio = document.getElementById("audio");
	audio.pause(); 
}


