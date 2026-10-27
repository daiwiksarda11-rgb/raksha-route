/*
 * Raksha Route settings. Edit with Notepad, save, then upload the folder to Netlify again.
 * No rebuild needed. These values are safe to be public; protect them with the
 * restrictions described in the README (website restriction + Firestore rules).
 */
window.RAKSHA_CONFIG = {
  /* Accounts, family tracker, live sharing and alerts.
     Paste the values from Firebase console → Project settings → Your apps → Web app. */
  firebase: {
    apiKey: "AIzaSyBDq_Vf-Zqv-32LgQK0FLrCcpH5xDEQxG0",
    authDomain: "raksha--route.firebaseapp.com",
    projectId: "raksha--route",
    appId: "1:787131285955:web:6f4316e4b58414817e7d76"
  },

  /* Google Maps key: search every shop, school and apartment, plus Google ratings. */
  googleMapsApiKey: "AIzaSyAA32RELGx7wIRDv3jyNH9hYC07pIANs50",

  /* Optional extras */
  geoapifyKey: "",
  maptilerKey: ""
};
