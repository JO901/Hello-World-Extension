console.log('App Started');

document.addEventListener('DOMContentLoaded', () => {
  let title = document.querySelector('h1');
  let button = document.querySelector('button');
  let time = document.querySelector('p');
  let image = document.querySelector('img');
  if (document.getElementById('totalTime').innerText) {//this is where we're stopping!

  }
  //if totalTime has innertext, use that as the value
  //otherwise value is value
  let totalTime = document.getElementById('totalTime').innerText;
  let rounds = document.getElementById('rounds').innerText;
  let counter = 5;
  let loops = 2;
  let pictures = [
    'https://cdn-icons-png.flaticon.com/512/6028/6028784.png',
    'https://clipground.com/images/arm-stretches-clipart-kids-2.jpg',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F523-5237384_woman-exercise-clipart-stretching-cartoon-png-transparent-png.png&f=1&nofb=1&ipt=e04f602c2a674b5a9433d39491daba05156e3c40c74ed1578124bca0cd3b6117&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2024226%2Fscreenshots%2F10481080%2Fstretch.gif&f=1&nofb=1&ipt=d7606e175570e7ce26ef0e46db731c44dc5e5bb27bdc30a8975b865a4927b00a&ipo=images',
    'https://c8.alamy.com/comp/ER7WT4/vector-illustration-of-well-done-star-icon-concept-ER7WT4.jpg',
  ];
  let i = 1;
  //   const promise = chrome.action.openPopup();
  //   console.log(promise);
  function exerciseLoop() {
    // const start = Date.now(); // records the current time
    console.log('Starting Timer');
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
      title.innerText = 'Stretch Ends';

      counter = 5;
      if (loops > 0) {
        loops--;
        cooldown();
      } else {
        time.innerText = 'End of Exercise';
        button.style.visibility = 'visible';
        image.setAttribute('src', pictures[pictures.length - 1]);
        loops = 2;
        i = 1;
      }
    }, 5000);
  }

  function cooldown() {
    //i++ so hopefully it displays the next image
    i++;
    image.setAttribute('src', pictures[i]);

    time.innerText = 'Cooldown - preview next stretch';
    setTimeout(() => {
      exerciseLoop();
      console.log('Cooled-down for 5 seconds success');
    }, 5000);
  }

  button.addEventListener('click', () => {
    button.style.visibility = 'hidden';
    exerciseLoop();
  });

  chrome.windows.onRemoved.addListener(() => {
    image.setAttribute('src', pictures[0]);
    i = 1;
  });
});
