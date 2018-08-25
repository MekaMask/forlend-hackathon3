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

export class ItemLog{
    public _id:string;
    public itemId:string;
    public log: LogInfo[];
}
export class LogInfo{
    public status:string;
    public actionDate:string;
    public actionBy:string;
    public witnessBy:string
}