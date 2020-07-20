export class Entity<T> {
    id! : Number;
    type! : String;
    eventType! : String;
    data! : T;
}