// // Get the button element from the HTML document
// const sendNotificationBtn = document.getElementById("send-notification");

// // Add an event listener to the button that will ask for permission to display notifications when clicked
// sendNotificationBtn.addEventListener("click", () => {
//   // First, check if the browser supports notifications
//   if (!("Notification" in window)) {
//     console.log("This browser does not support desktop notifications");
//     return;
//   }

//   // Then, check if the user has already granted permission for notifications
//   if (Notification.permission === "granted") {
//     console.log("Permission to display notifications has already been granted");
//     return;
//   }

//   // Finally, if the user hasn't granted permission yet, ask for it
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Permission to display notifications has been granted");
//     }
//   });
// });



// const titleInput = document.getElementById('title');
// const bodyInput = document.getElementById('body');

// // Check if the user has already granted permission for notifications
// if (Notification.permission === "granted") {
//     console.log("show form")
//   showForm();
// } else {
//     console.log("show send notification")
//   showSendNotificationBtn();
// }

// // Add an event listener to the "Send Notification" button to request permission from the user
// sendNotificationBtn.addEventListener('click', () => {
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       showForm();
//       hideSendNotificationBtn();
//     }
//   });
// });

// // Add an event listener to the "Show" button to display a notification
// showNotificationBtn.addEventListener('click', () => {
//   const title = titleInput.value;
//   const body = bodyInput.value;

//   // Check if the user has entered a title
//   if (!title) {
//     alert('Please enter a title for the notification.');
//     return;
//   }

//   const notification = new Notification(title, {
//     body: body || '',
//     actions: [
//       { action: 'agree', title: 'Agree' },
//       { action: 'disagree', title: 'Disagree' }
//     ]
//   });
// });

// // Helper functions to show/hide the form and "Send Notification" button
// function showForm() {
//   document.getElementById('form').style.display = 'block';
// }

// function hideSendNotificationBtn() {
//   sendNotificationBtn.style.display = 'none';
// }

// function showSendNotificationBtn() {
//   sendNotificationBtn.style.display = 'block';
// }

// window.addEventListener('load', () => {
//   // Check if the user has already granted permission for notifications
//   if ("Notification" in window) {
//     Notification.requestPermission().then(function(result) {

//     });
//   }
//   if (Notification.permission === "granted") {
//     showForm();
//   } else {
//     console.log("show")
//     showSendNotificationBtn();
//   }
// });

const sendNotificationBtn = document.getElementById('notification-btn');
const showNotificationBtn = document.getElementById('showbtn');
const titleInput = document.getElementById('title');
const bodyInput = document.getElementById('body');


// function requestNotificationPermission() {
//   return new Promise(function(resolve, reject) {
//     if (Notification.permission === 'granted') {
//       resolve();
//     } else if (Notification.permission !== 'denied') {
//       Notification.requestPermission().then(function(permission) {
//         if (permission === 'granted') {
//           resolve();
//         } else {
//           reject();
//         }
//       });
//     } else {
//       reject();
//     }
//   });
// }

// function abc() {
//   // Your function to be called once the permission has been granted.
//   console.log('Permission granted.');
//   showForm();
// }

// window.addEventListener('load', () => {
//   // Check if the user has already granted permission for notifications
//   if ("Notification" in window) {
//     requestNotificationPermission().then(function() {
//       abc();
//     }).catch(function() {
//       console.log('Permission denied.');
//       showSendNotificationBtn();
//     });
//   } else {
//     console.log('Notification not supported.');
//   }
// });


// Add an event listener to the "Send Notification" button to request permission from the user
sendNotificationBtn.addEventListener('click', () => {
  console.log('Send notification button clicked');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      showForm();
      hideSendNotificationBtn();
    }
  });
});


// Add an event listener to the "Show" button to display a notification
showNotificationBtn.addEventListener('click', () => {
  const title = titleInput.value;
  const body = bodyInput.value;
  console.log(title)

  // Check if the user has entered a title
  if (!title) {
    alert('Please enter a title for the notification.');
    return;
  }

  const notification = new Notification(title, {
    body: body || '',
    actions: [
      { action: 'agree', title: 'Agree' },
      { action: 'disagree', title: 'Disagree' }
    ]
  });
});

// Helper functions to show/hide the form and "Send Notification" button
function showForm() {
  document.getElementById('showbtn').style.backgroundColor = 'yellow';
}

function hideSendNotificationBtn() {
  console.log("show disable")
  sendNotificationBtn.disabled = true;
}

function showSendNotificationBtn() {
  console.log("show enable")
  sendNotificationBtn.disable = false;
}
