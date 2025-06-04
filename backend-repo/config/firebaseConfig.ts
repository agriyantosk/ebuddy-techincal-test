import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH) {
  throw new Error(
    "Missing FIREBASE_SERVICE_ACCOUNT_KEY_PATH in environment variables"
  );
}

const serviceAccountPath = path.resolve(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH
);
console.log(serviceAccountPath, ">>>>");
if (!fs.existsSync(serviceAccountPath)) {
  throw new Error(`Service account file not found at: ${serviceAccountPath}`);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

initializeApp({
  credential: cert(serviceAccount as any),
});

const db = getFirestore();

export default db;
