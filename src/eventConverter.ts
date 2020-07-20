import { Entity } from './entity';
import { EntityEvent } from './entityEvent';

export function convert<T>(entity: Entity<T>) : EntityEvent{
    let event = new EntityEvent();
    event.id = entity.id;
    event.type = entity.type;
    event.eventType = entity.eventType;
    event.timestamp = Date.now();
    return event;
}