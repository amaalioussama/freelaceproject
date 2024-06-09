import admin from 'firebase-admin';

const serviceAccount = require('../(firebasethings)/firebase');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const auth = admin.auth();
