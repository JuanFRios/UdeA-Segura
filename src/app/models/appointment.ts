import { Place } from './place';
import { User } from './user';

export interface Appointment {
    user: User;
    place: Place;
    appointmentDate: string;
    cameIn: boolean;
    cameOut: boolean;
}