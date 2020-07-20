import { process } from './processor';
import { processInTransaction } from './processor';
import { Entity } from './entity';

let entity = new Entity<String>();
entity.id = 9;
entity.type = 'Clip';
entity.eventType = 'UPDATE';
entity.data = "data-here";

//process(entity);
processInTransaction(entity).then(res => console.log("Result: "+res)).catch(err => console.log("Error: "+err));

