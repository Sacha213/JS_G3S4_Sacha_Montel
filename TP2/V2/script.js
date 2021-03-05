window.addEventListener("load", function(){
    var elementClock = document.getElementById("clock");
    var elementDisplay = document.createElement("div");
    var elementAddAlarmButton = document.createElement("button");
    var objCurrentTime = new Date();
    var arrayAlarm = [];

    initClock();

    function initClock(){
        elementAddAlarmButton.textContent = "+";
        elementClock.appendChild(elementDisplay);
        elementClock.appendChild(elementAddAlarmButton);

        elementAddAlarmButton.addEventListener("click", addAlarm);
        refreshDisplay();
    }

    function refreshDisplay() {
        objCurrentTime.setTime(Date.now());
        elementDisplay.textContent = objCurrentTime.toLocaleTimeString();
        checkAlarms();
        setTimeout(refreshDisplay, 250);
    }

    function addAlarm() {
        var alarmContainer = document.createElement("div");
        var checkboxActive = document.createElement("input");
        var selectHour = document.createElement("select");
        var selectMinute = document.createElement("select");
        var selectSeconde = document.createElement("select");
        var btnRemoveAlarm = document.createElement("button");

        checkboxActive.setAttribute("type", "checkbox");
        checkboxActive.checked = true;

        for(i=0;i<24;i++) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectHour.appendChild(opt);
        }

        for(i=0;i<60;i++) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectMinute.appendChild(opt);
        }

        for(i=0;i<60;i++) {
            let opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            selectSeconde.appendChild(opt);
        }

        btnRemoveAlarm.textContent = "-";
        btnRemoveAlarm.addEventListener("click", removeAlarm);

        alarmContainer.appendChild(checkboxActive);
        alarmContainer.appendChild(selectHour);
        alarmContainer.appendChild(selectMinute);
        alarmContainer.appendChild(selectSeconde);
        alarmContainer.appendChild(btnRemoveAlarm);

        elementClock.insertBefore(alarmContainer, elementAddAlarmButton);

        arrayAlarm.push(alarmContainer);
    }

    function removeAlarm() {
        var alarmToremove = this.parentNode;
        elementClock.removeChild(alarmToremove);
    }

    function checkAlarms() {
        for(i=0;i<arrayAlarm.length; i++){
            if(!arrayAlarm[i].childNodes[0].checked) {
                continue;
            }

            if(arrayAlarm[i].childNodes[1].value != objCurrentTime.getHours()) {
                continue;
            }

            if(arrayAlarm[i].childNodes[2].value != objCurrentTime.getMinutes()) {
                continue;
            }

            if(arrayAlarm[i].childNodes[3].value != objCurrentTime.getSeconds()) {
                continue;
            }

            document.body.style.backgroundColor = "red";
            arrayAlarm[i].childNodes[0].addEventListener("click", stopAlarm);
            arrayAlarm[i].childNodes[3].addEventListener("click", stopAlarm);
            break;
        }
    }

    function stopAlarm(){
        document.body.style.backgroundColor = "white";
        this.checked = false;
        this.removeEventListener("click", stopAlarm);
    }

});