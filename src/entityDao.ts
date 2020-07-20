import { Entity } from './entity';
import { Firestore } from './firestore';

export function saveEntity<T>(entity: Entity<T>) {
    const db = Firestore.getInstance();
    let docRef = db.collection('entity').doc(entity.id.toString());
    let setAda = docRef.set(JSON.parse(JSON.stringify(entity)));
    return Promise.all([setAda]);
}

export function saveEntityWithTransaction<T>(entity: Entity<T>, transaction: FirebaseFirestore.Transaction) {
    const db = Firestore.getInstance();
    let docRef = db.collection('entity').doc(entity.id.toString());
    return transaction.set(docRef, JSON.parse(JSON.stringify(entity)));
}