import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knwonAs: string;
    age: number;
    gender: Date;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introductin?: string;
    lookingFor?: string;
    photos?: Photo[];
}
