import firestore from "./firebase";
import firebase from "firebase/compat/app";

export const create = (productObject) => {
    firestore.collection("cart").add(productObject);
};

export const readAll = async (collection, callback) => {
    const querySnapshot = await firestore.collection(collection).get();
    const productList = [];
    querySnapshot.forEach((document) => {
        if (document.data().fieldId === undefined) {
            const idCreator = firestore.collection(collection).doc(document.id);
            idCreator.set({ fieldId: document.id }, { merge: true });
        }
        productList.push(document.data());
    });
    callback(productList);
};
export const update = (id, field) => {
    firestore.collection("cart").doc(id).set(field, { merge: true });
};

export const increment = (number) =>
    firebase.firestore.FieldValue.increment(number);

export const deleteDoc = (id) => {
    firestore.collection("cart").doc(id).delete();
};
