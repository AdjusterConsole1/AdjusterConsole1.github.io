import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getStorage, ref, listAll, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBbIDO_A-2sqnNP8qQC9OCJ2hOvfwwY050",
  authDomain: "adjusterestimate.firebaseapp.com",
  projectId: "adjusterestimate",
  storageBucket: "adjusterestimate.appspot.com",
  messagingSenderId: "76107438642",
  appId: "1:76107438642:web:1901ed4ba7801c3d147a2b",
  measurementId: "G-QLXRDC8KWY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

async function downloadLatestFile() {
  try {
    const listRef = ref(storage, '');
    const listResult = await listAll(listRef);

    if (listResult.items.length > 0) {
      // Sort items by name to find the latest one (assuming filenames include a timestamp or version)
      listResult.items.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });

      const latestFileRef = listResult.items[0];
      const downloadURL = await getDownloadURL(latestFileRef);
      const response = await fetch(downloadURL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonContent = await response.json();
      return jsonContent;
    } else {
      console.log("No files found.");
      return null;
    }
  } catch (error) {
    console.error("Error listing files:", error);
    return null;
  }
}

async function initializeFirebaseAuth() {
  try {
    await signInAnonymously(auth);
    console.log("Signed in anonymously");
  } catch (error) {
    console.error("Anonymous sign-in error:", error);
  }
}

initializeFirebaseAuth();

export { downloadLatestFile };
