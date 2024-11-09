import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signOut, onIdTokenChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

let firebaseApp;
let auth;

async function getFirebaseConfig() {
  try {
    const response = await fetch('/firebaseConfig');
    if (!response.ok) throw new Error('Failed to fetch Firebase config');
    const config = await response.json();
    return config;
  } catch (error) {
    console.error('Error fetching Firebase config:', error);
    return null;
  }
}

async function initializeFirebase() {
  const firebaseConfig = await getFirebaseConfig();
  if (firebaseConfig) {
    firebaseApp = initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
    initializeAuthStateListener();
  } else {
    console.error("Firebase initialization failed due to missing config.");
  }
}
initializeFirebase();

function getFirebaseAuth() {
  if (!firebaseApp) {
    console.error("Firebase app not initialized. Ensure config is loaded first.");
    return null;
  }
  return auth;
}

export function logoutUser() {
  const auth = getFirebaseAuth();
  if (!auth) return;
  signOut(auth)
    .then(async () => {
      await fetch('/sessionLogout', {
        method: 'POST'
      });
      window.location.href = '/login';
    })
    .catch((error) => {
      console.error("Error logging out:", error);
      alert("Logout failed: " + error.message);
    });
}

function initializeAuthStateListener() {
	const auth = getFirebaseAuth();
	onIdTokenChanged(auth, async (user) => {
		if (user) {
			const idToken = await user.getIdToken();
			const response = await fetch('/sessionLogin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ idToken }),
			});
			if (!response.ok) {
				console.error('Session login failed:', response.statusText);
			}
		} else {
			await fetch('/sessionLogout', {
				method: 'POST',
			});
		}
	});
}

document.getElementById("logOutBtn").addEventListener("click", logoutUser);
