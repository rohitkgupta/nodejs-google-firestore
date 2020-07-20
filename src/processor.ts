import { saveEvent } from './eventDao';
import { saveEventWithTransaction } from './eventDao';
import { saveEntity } from './entityDao';
import { saveEntityWithTransaction } from './entityDao';
import { Entity } from './entity';
import { convert } from './eventConverter';
import { Firestore } from './firestore';

export function process<T>(entity: Entity<T>) {
    saveEntity(entity).then(r => {
        console.log("Entity Saved")
        let event = convert<T>(entity);
        saveEvent(event).then(r => console.log("Event Saved")).catch(e => console.log("Error in saveEvent. " + e));
    }).catch(e => console.log("Error in saveEntity. " + e));
    
}

export function processInTransaction<T>(entity: Entity<T>) : Promise<String>{
    return Firestore.getInstance().runTransaction(transaction => {
        saveEntityWithTransaction(entity, transaction);
        let event = convert<T>(entity);
        saveEventWithTransaction(event, transaction);
        return Promise.resolve("Saved");
    });
}
