import { EntityEvent } from './entityEvent';
import { Firestore } from './firestore';


export function saveEvent(event: EntityEvent) {
    const db = Firestore.getInstance();
    let docRef = db.collection('event').doc(event.id.toString());
    let setAda = docRef.set(JSON.parse(JSON.stringify(event)));
    return Promise.all([setAda]);
}

export function saveEventWithTransaction(event: EntityEvent, transaction: FirebaseFirestore.Transaction) {
    const db = Firestore.getInstance();
    let docRef = db.collection('event').doc(event.id.toString());
    //throw new Error("Artifical error");
    return transaction.set(docRef, JSON.parse(JSON.stringify(event)));
}