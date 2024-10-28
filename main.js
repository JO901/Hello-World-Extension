console.log('App Started');

document.addEventListener('DOMContentLoaded', () => {
  let title = document.querySelector('h1');
  let button = document.querySelector('button');
  let time = document.querySelector('p');
  let counter = 10;
  let loops = 2;
  let pictures = [
    'https://clipground.com/images/arm-stretches-clipart-kids-2.jpg',
  ];

  //   const promise = chrome.action.openPopup();
  //   console.log(promise);
  function exerciseLoop() {
    // const start = Date.now(); // records the current time
    console.log('Starting Timer');
    let timer = setInterval(() => {
      //   const diff = Date.now() - start; // records difference between when we started and the current time
      counter--;
      time.innerText = `Time Remaining: ${counter}`;
      //console.log(`seconds elapsed = ${Math.floor(diff / 1000)}`); // calculates the seconds (not milliseconds)
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      title.innerText = 'Stretch Ends';

      counter = 10;
      if (loops > 0) {
        loops--;
        cooldown();
      } else {
        time.innerText = 'End of Exercise';
        button.style.visibility = 'visible';
      }
    }, 10000);
  }

  function cooldown() {
    time.innerText = 'Cooldown';
    setTimeout(() => {
      exerciseLoop();
      console.log('Cooled-down for 5 seconds success');
    }, 5000);
  }

  button.addEventListener('click', () => {
    button.style.visibility = 'hidden';
    exerciseLoop();
  });
});

// chrome.runtime.onInstalled.addListener(async ({ reason }) => {
//     if (reason !== 'install') {
//       return;
//     }

//     // Create an alarm so we have something to look at in the demo
//     await chrome.alarms.create('demo-default-alarm', {
//       delayInMinutes: 1,
//       periodInMinutes: 1,
//     });
//   });

// chrome.runtime.onStartup.addListener(function() {
//     console.log('open');
//   })
