export class Slot{
    public _id: string;
    public name: string;
    public row: string;
    public col: string;
}

export class ItemDetail{
    public _id: string;
    public name: string;
    public locker: Slot;
    public canlend: boolean;
    public canSendBack: boolean;
}