import firestore from "./firebase";
import firebase from "firebase/compat/app";

export const create = (productObject) => {
    firestore.collection("cart").add(productObject);
};

export const createId = async (collection) => {
    const querySnapshot = await firestore.collection(collection).get();
    querySnapshot.forEach((document) => {
        firestore
            .collection(collection)
            .doc(document.id)
            .set({ fieldId: document.id }, { merge: true });
    });
};

export const readAll = async (collection, callback) => {
    const querySnapshot = await firestore.collection(collection).get();
    const productList = [];
    querySnapshot.forEach((document) => {
        productList.push(document.data());
    });
    callback(productList);
};

export const read = async (collection, id, callback) => {
    const querySnapshot = await firestore.collection(collection).doc(id).get();

    callback(querySnapshot.data());
};

export const update = (id, field) => {
    firestore.collection("cart").doc(id).update(field, { merge: true });
};

export const increment = (number) =>
    firebase.firestore.FieldValue.increment(number);

export const deleteDoc = (id) => {
    firestore.collection("cart").doc(id).delete();
};
