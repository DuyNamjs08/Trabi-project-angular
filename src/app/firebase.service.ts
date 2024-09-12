import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fs: Firestore) {}
  getData() {
    let categoryColection = collection(this.fs, 'categorys');
    return collectionData(categoryColection, { idField: 'id' });
  }
  updateData(id: string, data: any) {
    let docRef = doc(this.fs, 'categorys', id);
    return updateDoc(docRef, data);
  }
  addData(data: any) {
    let categoryColection = collection(this.fs, 'categorys');
    return addDoc(categoryColection, data);
  }
  getDataNested() {
    let categoryColection = collection(this.fs, 'category/books/test');
    return collectionData(categoryColection, { idField: 'id' });
  }
  addDataNested(data: any) {
    let categoryColection = collection(this.fs, 'category/books/test');
    return addDoc(categoryColection, data);
  }
  deleteData(id: string) {
    let categoryColection = doc(this.fs, 'categorys/' + id);
    return deleteDoc(categoryColection);
  }
  async getDocss() {
    const docRef = doc(this.fs, 'books', 'title');
    const respone = await getDoc(docRef);
    console.log(respone.data());
  }
}
