// functions/index.ts
import * as functions from 'firebase-functions';

export const yourFunction = functions.https.onRequest((req, res) => {
  // Contoh logika fungsi: mengembalikan respons JSON
  const data = {
    message: 'Hello from yourFunction!',
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(data);
});
