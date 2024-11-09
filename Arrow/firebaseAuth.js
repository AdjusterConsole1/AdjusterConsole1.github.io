import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  onIdTokenChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

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

export async function loginUser(email, password) {
  const auth = getFirebaseAuth();
  if (!auth) return;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = '/';
  } catch (error) {
    console.error("Error logging in:", error.code, error.message);
    alert("Login failed: " + error.message);
  }
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

export function handleLoginFormSubmit(event) {
  event.preventDefault();
  const email = document.getElementById("emailLogIn").value;
  const password = document.getElementById("password").value;
  loginUser(email, password);
}

export function forgotPassword(event) {
  event.preventDefault();
  const email = document.getElementById("emailLogIn").value;
  if (!email) {
    alert("Please enter your email address first.");
    return;
  }
  const auth = getFirebaseAuth();
  if (auth) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        alert("Error sending password reset email. Please try again.");
      });
  } else {
    console.error("Authentication instance could not be retrieved.");
  }
}

export function signUp(event) {
  event.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const auth = getFirebaseAuth();
  if (auth) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = '/';
      })
      .catch((error) => {
        console.error("Error during sign-up:", error);
        alert("Error during sign-up: " + error.message);
      });
  } else {
    console.error("Authentication instance could not be retrieved.");
  }
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

document.getElementById("login-form").addEventListener("submit", function (event) {
  handleLoginFormSubmit(event);
});

document.getElementById("forgotPasswordLink").addEventListener("click", function (event) {
  forgotPassword(event);
});

document.getElementById("signup-form").addEventListener("submit", function (event) {
  signUp(event);
});
