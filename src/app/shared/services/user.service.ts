import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private firestore: AngularFirestore
    ) {
    }

    public getAll() {
        return this.firestore.collection('users').snapshotChanges();
    }

    public getById(userId: any) {
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
}
