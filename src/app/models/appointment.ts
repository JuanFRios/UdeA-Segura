import { strict } from 'assert';
import { Place } from './place';
import { User } from './user';

export interface Appointment {
    user: User;
    place: Place;
    appointmentDate: string;
    cameIn: boolean;
    cameOut: boolean;
}

export interface AppointmentItem {
    aid: string;
    place: Place;
    appointmentDate: string;
    status: string;
}

export interface NewAppointment {
    placeId: string;
    appointmentDate: string;
}

export class ThrouhgGate {
    visitorIdentification: string;
    placeId: string;
    constructor(visitorIdentificaction: string, placeId: string) {
        this.visitorIdentification = visitorIdentificaction;
        this.placeId = placeId;
    }
}