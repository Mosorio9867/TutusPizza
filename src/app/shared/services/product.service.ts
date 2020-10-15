import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from 'rxjs';
import { map, first } from 'rxjs/operators';
import {Product, ProductInCart} from 'app/main/pages/product/product.module';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    public productsInCartSubject: BehaviorSubject<ProductInCart[]> = new BehaviorSubject<ProductInCart[]>([]);
    public productsInCart$ = this.productsInCartSubject.asObservable();

    constructor(
        private _angularFirestore: AngularFirestore
    ) {
    }

    public getAll(): Observable<Product[]> {
        return this._angularFirestore
            .collection("product")
            .snapshotChanges()
            .pipe(
                map((response) => {
                    return response.map(a => {
                        const data = a.payload.doc.data() as Product;
                        data.id = a.payload.doc.id;
                        return data;
                    });
                }),
                first()
            );
    }

    public getById(id: string) {
        return this._angularFirestore
            .collection("product")
            .doc(id)
            .snapshotChanges()
            .pipe(
                map((response) => {
                    const data = response.payload.data() as Product;
                    data.id = response.payload.id;
                    return data;
                }),
                first()
            );
    }

    public create(data: Product) {
        return this._angularFirestore.collection('product').doc(data.id).set(data);
    }

    public update(data: Product): any {
        return this._angularFirestore.collection('product').doc(data.id).set(data);
    }

    public remove(id: string) {
        return this._angularFirestore.collection('product').doc(id).delete();
    }

    public addToCart(data: ProductInCart[]): void {
        this.productsInCartSubject.next(data);
    }
}
