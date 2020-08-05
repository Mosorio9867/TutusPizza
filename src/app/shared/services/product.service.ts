import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from 'app/main/pages/product/product.module';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(
        private firestore: AngularFirestore
    ) {
    }

    public getAll() {
        return this.firestore.collection('product').snapshotChanges();
    }

    public getById(userId: string) {
        return this.firestore.collection('product').doc(userId).snapshotChanges();
    }

    public create(data: Product) {
        return this.firestore.collection('product').doc(data.id).set(data);
    }

    public update(data: Product): any {
        return this.firestore.collection('product').doc(data.id).set(data);
    }

    public remove(data: Product): any {
        return this.firestore.collection('product').doc(data.id).delete();
    }
}
