// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendNotification = functions.database.ref('/comments/{commentId}')
  .onCreate((snapshot, context) => {
    const commentData = snapshot.val();
    const emailNotification = {
      to: 'your-email@example.com', // Ganti dengan alamat email Anda
      message: {
        subject: 'New Comment',
        text: `New comment from ${commentData.name}: ${commentData.comment}`
      }
    };

    return admin.messaging().send(emailNotification);
  });
