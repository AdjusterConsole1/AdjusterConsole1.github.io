//COPYRIGHT © Jesse Williams 2024 – ALL RIGHTS RESERVED WORLDWIDE
//This website and it's content including, but not limited to, the 'A' logo and 'AdjusterConsole' are protected by copyright law.
//You are granted a limited license to access and use the materials on this website for personal use only.
//This code is provided under the following Terms and Conditions:
//
//You may not copy, download, reproduce, distribute, publish, display, perform, modify, create derivative works from, transmit, or otherwise exploit any part of this website or its content, in whole or in part, without the express, written permission of the author, Jesse Williams.
//You are not allowed to use this website or code for any illegal or unethical purpose.
//This license applies to all versions of the code previously released, as well as all future versions. Any prior statements made about permission given are hereby revoked.
//This code is provided "as is", without warranty of any kind, express or implied. The author shall not be liable for any damages arising from the use of this code.
//
//All trademarks, service marks, proprietary information, and/or documents not owned by Jesse Williams that appear on this website are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Jesse Williams.
//All proprietary information, documents, and content not owned by Jesse Williams but accessible through this website should be treated as confidential and used solely for their intended and expressly authorized purposes. Unauthorized use, distribution, or disclosure of such proprietary information is strictly prohibited.
//For inquiries regarding licensing or permission to use this code in ways not covered by this license, please contact the author at AdjusterConsole@gmail.com.
//By using this code, you agree to abide by these terms and conditions.
//Failure to comply with these terms may result in legal action.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
signInAnonymously(auth)
  .then(() => {
    console.log('Signed in anonymously');
  })
  .catch((error) => {
    console.error('Anonymous sign-in error:', error);
  });

async function downloadFile(referenceKey) {
  const filePath = `uploads/${referenceKey}.json`; // Correct path construction
  const storageRef = ref(storage, filePath);
  try {
    const url = await getDownloadURL(storageRef);
    
    // Using XMLHttpRequest to download the file
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json'; // Expecting a JSON response
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error('Failed to download file'));
        }
      };
      xhr.onerror = () => reject(new Error('Network error'));
      xhr.open('GET', url);
      xhr.send();
    });
    
  } catch (error) {
    console.error('Error downloading file:', error);
    return null;
  }
}

export { downloadFile };
