import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBx1FCIiv0mBnRR8XFtwE64Dg7sY6SzZkk",
  authDomain: "dashbord-f15c6.firebaseapp.com",
  projectId: "dashbord-f15c6",
  storageBucket: "dashbord-f15c6.appspot.com",
  messagingSenderId: "45373740179",
  appId: "1:45373740179:web:b401fba05dd6bed7c02966",
  measurementId: "G-7QTSLHQY7H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function getUserInfo(uid) {
  try {
    const docRef = doc(db, 'userinformations', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting user document:', error);
    return null;
  }
}

export { auth, db, getUserInfo };
