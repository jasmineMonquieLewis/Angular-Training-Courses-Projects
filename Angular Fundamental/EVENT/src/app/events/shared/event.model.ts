import { ISession } from './session.model';

export interface IEvent {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location?: { //use ? behind a variable if it can be null
        address: string;
        city: string;
        country: string
    },
    onlineUrl?: string,
    sessions: ISession[]
}