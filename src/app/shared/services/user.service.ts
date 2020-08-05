import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public userSubject = new BehaviorSubject(null);

    constructor(
        private firestore: AngularFirestore
    ) {
    }

    public getAll() {
        return this.firestore.collection('users').snapshotChanges();
    }

    public getById(userId: any): Observable<any> {
        return this.firestore.collection('users').doc(userId).snapshotChanges();
    }

    public create(data: any) {
        return this.firestore.collection('users').doc(data.id).set(data);
    }

    public update(data: any): any {
        return this.firestore.collection('users').doc(data.id).set(data);
    }

    public remove(data: any): any {
        return this.firestore.collection('users').doc(data.id).delete();
    }

    public updateUser(data) {
        this.userSubject.next(data);
    }
}
