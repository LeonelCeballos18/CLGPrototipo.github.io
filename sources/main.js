window.onload = () => {
  //Variables timer
  let currentTime; //Minutos seteados
  let seconds = 0;

  //Variables pomodoro
  let workTime; //Tiempo de trabajo
  let breakTime; //Tiempo de descanso
  let timesCompleted = 0; //Ciclos de 25+5 completados
  let cyclesGoal; //Ciclos ingresados por el usuario
  let cyclesCompleted = 0; //Ciclos completados
  let pausa = false;

  //Conexiones con el frontend

  let clock = document.getElementById("clock");
  let clockTitle = document.getElementById("clockTitle");
  let cyclesInput = document.getElementById("cycles-input");
  const startButton = document.getElementById("start-button");
  const pauseButton = document.getElementById("pause-button");
  const stopButton = document.getElementById("stop-button");
  const aumentar1 = document.getElementById("aumentar1");
  const aumentar5 = document.getElementById("aumentar5");
  let workTimeInput = document.getElementById("work-time");
  let breakTimeInput = document.getElementById("break-time");
  const div = document.querySelector(".pomodoro-container");
  const lbl = document.getElementById("labelAumentar");
  const btn1 = document.getElementById("aumentar1");
  const btn5 = document.getElementById("aumentar5");

  lbl.classList.toggle("esconder");
  btn1.classList.toggle("esconder");
  btn5.classList.toggle("esconder");
  pauseButton.classList.toggle("esconder");
  stopButton.classList.toggle("esconder");

  //funcion de actualizar variables
  function populateVariables() {
    console.log("populate Variables");
    workTime = workTimeInput.value; //Minutos
    breakTime = breakTimeInput.value; //Descanso
    cyclesGoal = cyclesInput.value; //Ciclos
    timesCompleted = 0; //Ciclos completados
  }

  //Funcion para imprimir los numeros en el reloj
  function updateClock() {
    clockMinutes = formatNumbers(currentTime);
    clockSeconds = formatNumbers(seconds);
    clock.innerHTML = clockMinutes + ":" + clockSeconds;
  }

  //Boton start
  startButton.onclick = () => {
    populateVariables();
    startPomodoro();
    startButton.classList.toggle("esconder");
    pauseButton.classList.remove("esconder");
    stopButton.classList.remove("esconder");
  };

  pauseButton.onclick = () => {
    if (pausa == false) {
      pausa = true;
    } else {
      pausa = false;
    }
    console.log(pausa);
  };

  stopButton.onclick = () => {
    location.reload();
  };

  function startPomodoro() {
    console.log("pomodoro empezado");
    startButton.disabled = true;
    lbl.classList.remove("esconder");
    btn1.classList.remove("esconder");
    btn5.classList.remove("esconder");
    pomodoroController();
  }

  //Funcion para la pausa larga(final)
  function finish() {
    if (timesCompleted / 2 == cyclesGoal) {
      return true;
    } else {
      return false;
    }
  }

  //Funcion para definir trabajo o descanso o terminado
  let terminado = false;
  function pomodoroController() {
    if (finish() == true) {
      location.reload();
      timesCompleted = 0;
      terminado = true;
      div.classList.remove("descanso");
      startButton.enabled = true;
      restartClock();
      return;
    } else {
      if (timesCompleted % 2 == 0) {
        //Los procesos pares son siempre los de trabajo
        div.classList.remove("descanso");
        aumentar1.disabled = false;
        aumentar5.disabled = false;
        aumentar1.onclick = () => {
          currentTime += 1;
          console.log(3);
        };
        aumentar5.onclick = () => {
          currentTime += 5;
          console.log(3);
        };
        currentTime = workTime;
        timesCompleted++;
        timer();
        console.log(
          "Tiempo de trabajo" + timesCompleted + "ciclos" + cyclesCompleted
        );
      } else {
        //Si no es par, significa que sigue descanso o en su caso, el descanso largo(final)
        div.classList.toggle("descanso");
        currentTime = breakTime;
        aumentar1.disabled = true;
        aumentar5.disabled = true;
        timesCompleted++;
        timer();
        console.log(
          "Tiempo de descanso" + timesCompleted + "ciclos" + cyclesCompleted
        );
      }
    }
  }

  //Reinicia el reloj a 0
  function restartClock() {
    clock.innerHTML = "00:00";
  }

  //funcion de reloj
  function timer() {
    if (terminado == true) {
      return null;
    } else {
      if (currentTime > 0 || seconds > 0) {
        if(pausa == false){
            if (seconds == 0) {
                seconds = 59;
                currentTime--;
              } else {
                seconds--;
              }
              updateClock();
              console.log(currentTime, seconds);
              
        }
        setTimeout(timer, 1000);
      } else {
        pomodoroController();
      }
    }
  }

  //Cambiar formato numeros dle reloj
  function formatNumbers(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  window.addEventListener("blur", () => {
    location.reload();
  });
};
