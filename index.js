function requestNotificationPermission() {
  return new Promise(function(resolve, reject) {
    if (Notification.permission === 'granted') {
      resolve();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'granted') {
          resolve();
        } else {
          reject();
        }
      });
    } else {
      reject();
    }
  });
}

function abc() {
  // Your function to be called once the permission has been granted.
  console.log('Permission granted.');
  showForm();
}

window.addEventListener('load', () => {

  // Check if the user has already granted permission for notifications
  if ("Notification" in window) {
    requestNotificationPermission().then(function() {
      
      abc();
    }).catch(function() {
      console.log('Permission denied.');
      showSendNotificationBtn();
    });
  } else {
    console.log('Notification not supported.');
  }
});


// Add an event listener to the "Send Notification" button to request permission from the user
//sendNotificationBtn.addEventListener('click', () => 
function sendNotification(){
  console.log('Send notification button clicked');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      showForm();
      hideSendNotificationBtn();
    }
  });
};


// Add an event listener to the "Show" button to display a notification
//showNotificationBtn.addEventListener('click', () => 
// function showNotification(){
//   const title = document.getElementById('title').value;
//   const body = document.getElementById('body').value;
//   console.log(title)

//   // Check if the user has entered a title
//   if (!title) {
//     alert('Please enter a title for the notification.');
//     return;
//   }

//   new Notification(title, {
//     body: body || '',
//     actions: [
//       { action: 'agree', title: 'Agree' },
//       { action: 'disagree', title: 'Disagree' }
//     ]
//   });
// };

function showNotification() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const notification = new Notification("Hi there!");
  // Check if the user has entered a title
  if (!title) {
    alert('Please enter a title for the notification.');
    return;
  }else{
    new Notification(title, { body: body });
  }

//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready.then(registration => {
//       registration.showNotification(title, {
//         body: body || '',
//         actions: [
//           { action: 'agree', title: 'Agree' },
//           { action: 'disagree', title: 'Disagree' }
//         ]
//       });
//     });
//   } else {
//     new Notification(title, { body: body || '' });
//   }
 }


// Helper functions to show/hide the form and "Send Notification" button
function showForm() {
  document.getElementById('showbtn').style.backgroundColor = 'yellow';
}

function hideSendNotificationBtn() {
  console.log("show disable")
  
}

function showSendNotificationBtn() {
  console.log("show enable")
  document.getElementById('notification-btn').style.display = 'block';
}