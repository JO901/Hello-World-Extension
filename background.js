chrome.alarms.create('ALARM_NAME', {
  when: Date.now(), // when we want it to start counting down from
  periodInMinutes: 1, // when the alarm will run
  // delayInMinutes: //not sure how this one works - “specifies if the onAlarm event should delay a little before firing”
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('Alarm working?');
  if (alarm.name === 'ALARM_NAME') {
    console.log('The alarm was named correctly');

    chrome.notifications.create('NOTIFICATION_ID', {
      // name the notification
      type: 'basic', // other options = image, list, progress
      iconUrl: '/assets/wave.png', // path to icon that should be shown in notification/ relative to root of extension
      title: 'notification title', // title of notification
      message: 'notification message', // message shown in notification
      priority: 2, // range from -2 to 2 in priority, we want it to be highest priority
      buttons: [
        {
          title: 'Start stretching',
        },
        {
          title: 'Skip this break',
        },
      ],
      // silent: false, // that’s the default setting so it should make a sound
    });
    chrome.notifications
      .clear('NOTIFICATION_ID')
      .then(console.log('notification cleared'))
      .catch(console.log('error'));
  }
//   console.log(NOTIFICATION_ID.buttons[0].title); // throws error that NOTIFICATION_ID is not defined; we're trying to access that button click so that we can add a listener to say 'go open the extension if they click 'start stretching''
});
