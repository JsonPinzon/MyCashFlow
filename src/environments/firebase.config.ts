import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyD54irJaSuEYcKD5Zsn3l4uWtOmrNO9b40",
  authDomain: "mycashflow-d22c2.firebaseapp.com",
  projectId: "mycashflow-d22c2",
  storageBucket: "mycashflow-d22c2.firebasestorage.app",
  messagingSenderId: "637363151806",
  appId: "1:637363151806:web:9d9bf00be0ebc728b34fef",
  measurementId: "G-F1PC98PH7V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);