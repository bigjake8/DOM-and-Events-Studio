function init () {
    const flightStatus = document.getElementById("flightStatus");
    const statusReport = document.getElementById("statusReport");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const rocketUp = document.getElementById("rocketUp");
    const rocketDown = document.getElementById("rocketDown");
    const rocketRight = document.getElementById("rocketRight");
    const rocketLeft = document.getElementById("rocketLeft");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    let currentSpaceShuttleHeight = 0;
    takeoff.addEventListener("click", function() {
    let shuttleConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (shuttleConfirm){
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      currentSpaceShuttleHeight += 10000;
      spaceShuttleHeight.innerHTML = currentSpaceShuttleHeight;
    }
  });
  

    landing.addEventListener("click", function() {
      let landAlert = window.alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed";
      shuttleBackground.style.backgroundColor = "green";
      let currentSpaceShuttleHeight = 0;
      spaceShuttleHeight.innerHTML = currentSpaceShuttleHeight;
      
    });

      missionAbort.addEventListener("click", function() {
      let abortConfirm = window.confirm("Confirm that you want to abort the mission.");

      if (abortConfirm) {
      flightStatus.innerHTML = "Mission Aborted";
      shuttleBackground.style.backgroundColor = "green";
      let currentSpaceShuttleHeight = 0;
      spaceShuttleHeight.innerHTML = currentSpaceShuttleHeight;
      }
      });

      rocketUp.addEventListener("click", function() {
      currentSpaceShuttleHeight += 10000;
      spaceShuttleHeight.innerHTML = currentSpaceShuttleHeight;
    
      const img = document.getElementById('rocket');
      img.style.top = `${img.offsetTop - 10}px`;
      });

      rocketDown.addEventListener("click", function() {
      currentSpaceShuttleHeight -= 10000;
      spaceShuttleHeight.innerHTML = currentSpaceShuttleHeight;
      const img = document.getElementById('rocket');
      img.style.top = `${img.offsetTop + 10}px`;
      });

      rocketRight.addEventListener("click", function() {
      const img = document.getElementById('rocket');
      img.style.left = `${img.offsetLeft + 10}px`;
      });

      rocketLeft.addEventListener("click", function() {
      const img = document.getElementById('rocket');
      img.style.left = `${img.offsetLeft - 10}px`;
      });


}

window.addEventListener("load", init);