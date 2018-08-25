export class Slot{
    public _id: string;
    public name: string;
    public row: string;
    public col: string;
}

export class ItemDetail{
    public _id: string;
    public name: string;
    public detail: string;
    public type: string;
    public status: string;
    public locker: Slot;
}