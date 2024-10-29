console.log('App Started');

document.addEventListener('DOMContentLoaded', () => {
  let title = document.querySelector('h1');
  let button = document.querySelector('button');
  let time = document.querySelector('p');
  let image = document.querySelector('img');
  let link = document.getElementById('attribute');
  let timeLabel = document.getElementById('totalLabel');
  let roundsLabel = document.getElementById('roundsLabel');
  let size = document.querySelector('html');
  let cooldowncounter = 3;
  // if (document.getElementById('totalTime').innerText) {
  //   //this is where we're stopping!
  // }
  //if totalTime has innertext, use that as the value
  //otherwise value is value
  let totalTime = document.getElementById('totalTime'); // .innerText;
  let rounds = document.getElementById('rounds'); // .innerText;
  let loops = Number(rounds.value) - 1;
  let mins = Number(totalTime.value); // the number of minutes the user wants to stretch
  function calculateCounter(mins) {
    // assign variable 'counter' to a function to calculate how long each round should be
    let seconds = mins * 60; // converting the minutes the user asked for to seconds
    let total = seconds - 3 * (loops + 1); // 3 represents the seconds per cooldown
    let avgTotal = Math.floor(total / (loops + 1));
    console.log(`avgTotal`, avgTotal); // takes the total number of seconds and subtracts the cooldown periods
    return avgTotal; // takes that number and divides it by the number of rounds the user wants to stretch for; math.floor ensures it's a whole number
  }
  let counter = calculateCounter(mins);
  let timeout = counter * 1000; // timeout is the calculated result of that counter * 1000 for the setTimeout function
  let turnBackClock = counter;
  console.log(`turnBackClock before:`, turnBackClock);
  console.log(`counter before:`, counter);

  let pictures = [
    'https://cdn-icons-png.flaticon.com/512/6028/6028784.png',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmhrajZ0d29ubDllYWtrOG9yMGl2Zm5jejJreThyeHcyeTJ5NmMwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YbUaQg1NEyoJrgAD71/giphy.webp',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJkcTNmampueDZkZGlxZ2llNHdtZDh0dGE1MWhzcmJ1YTRwNDAybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EVi2cKlbUSWD79rsND/giphy.webp',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd20wcTVuOXdvY3ZsbWs5NzRrOTVmMG1yaWZsajNsNDBvdHljMnZraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KTRqoONHXp2Vts9TXh/giphy.webp',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGx5bTR3cHBhcndqNGt4Z2k0aXFxNmtpNndkdWFmbTR1bTR3a242ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oDqyNSiDEjgSaEJYNx/giphy.webp',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG9oam5sNncycjRhbGNlbnVycGFyMHRlMzZiZTA5Z2tudHYzbGJmdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zfXoksivZ5zeEWsswO/giphy.webp',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa20yeDVoemp6cWZ0M2huOWNhcjBsbGFsaDJ5dGhobGk3eTkxeTZsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QOZJKtV1vQEhVYGNfC/giphy.webp',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHJreWY2Y2xrYXZ6MWF3cGl0N211ZmQ4Z3c2OWJpa2dpbGdpY2h4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l143Nrkin2YX5TgbqN/giphy.webp',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejV0c2FlOHg0dDJtbWxiN2JmeW8ybHQzZGphbDFuZXJ0aDk5eTd0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/O6AYxUCVwrk6nPac7T/giphy.webp',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXFmb2VhZTZvZ2FxaGQ3bXZndnlnc3Q3eHlheDcwdXA1eXFsZzJoaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xtz6zMBnXtab1xTXl7/giphy.webp',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVnZnM0eGVtbDllZG9lN2JhMnQyaW9yd2kwazY2Z2dob2pnMnRwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m3ABlu8yuET632H0QB/giphy.webp',
    'https://c8.alamy.com/comp/ER7WT4/vector-illustration-of-well-done-star-icon-concept-ER7WT4.jpg',
  ];
  let i = 1;
  //   const promise = chrome.action.openPopup();
  //   console.log(promise);
  function exerciseLoop() {
    // const start = Date.now(); // records the current time
    console.log('Starting Timer');
    console.log(`counter`, counter);
    console.log(`timeout`, timeout);
    //put our first image up, pictures[i]
    image.setAttribute('src', pictures[i]);
    time.innerText = `Time Remaining: ${counter}`;

    let timer = setInterval(() => {
      //   const diff = Date.now() - start; // records difference between when we started and the current time
      counter--;
      time.innerText = `Time Remaining: ${counter}`;
      //console.log(`seconds elapsed = ${Math.floor(diff / 1000)}`); // calculates the seconds (not milliseconds)
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      title.innerText = 'Stretching';

      counter = turnBackClock; //changed this from 5
      if (loops > 0) {
        loops--;
        cooldown();
      } else {
        title.innerText = 'End of Exercise';
        time.style.visibility = 'hidden';
        button.style.visibility = 'visible';
        size.style.minHeight = '400px';
        totalTime.style.visibility = 'visible';
        rounds.style.visibility = 'visible';
        timeLabel.style.visibility = 'visible';
        roundsLabel.style.visibility = 'visible';
        link.style.visibility = 'visib';
        image.setAttribute('src', pictures[pictures.length - 1]);
        loops = Number(rounds.value);
        i = 1;
      }
    }, timeout);
  }

  function cooldown() {
    //i++ so hopefully it displays the next image
    i++;
    image.setAttribute('src', pictures[i]);
    cooldowncounter = 3;
    time.innerText = `Cooldown - preview next stretch (in ${cooldowncounter})`;

    let cooldownTimer = setInterval(() => {
      //   const diff = Date.now() - start; // records difference between when we started and the current time
      cooldowncounter--;
      time.innerText = `Cooldown - preview next stretch (in ${cooldowncounter})`;
      //console.log(`seconds elapsed = ${Math.floor(diff / 1000)}`); // calculates the seconds (not milliseconds)
    }, 1000);

    setTimeout(() => {
      exerciseLoop();
      console.log('Cooled-down for 5 seconds success');
      clearInterval(cooldownTimer);
    }, 3000);
  }

  button.addEventListener('click', () => {
    loops = Number(rounds.value) - 1;
    mins = Number(totalTime.value);
    counter = calculateCounter(mins);
    timeout = counter * 1000;
    turnBackClock = counter;

    size.style.minHeight = '300px';
    timeLabel.style.visibility = 'hidden';
    roundsLabel.style.visibility = 'hidden';
    button.style.visibility = 'hidden';
    totalTime.style.visibility = 'hidden';
    rounds.style.visibility = 'hidden';
    link.style.visibility = 'hidden';
    exerciseLoop();
  });

  chrome.windows.onRemoved.addListener(() => {
    image.setAttribute('src', pictures[0]);
    i = 1;
  });
});
