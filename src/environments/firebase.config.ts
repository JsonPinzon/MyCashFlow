import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);