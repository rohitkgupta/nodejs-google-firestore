import admin from 'firebase-admin';

export class Firestore {

    private static instance: FirebaseFirestore.Firestore;

    private constructor() {}

    public static getInstance() {
        if(!Firestore.instance) {
            process.env.GCLOUD_PROJECT = 'content-access-dev';
            const serviceAccount = require('/Users/rohitgupta/Documents/Workplace/gcpkey/content-access-dev-62d2ba324ab6.json');
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            Firestore.instance = admin.firestore();
            const settings = {timestampsInSnapshots: true};
            Firestore.instance.settings(settings);  
        }
        return Firestore.instance;
    }
}