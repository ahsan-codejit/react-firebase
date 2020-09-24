import { firestore } from './firebase';

export const getOrders = async () => {
    let orders = await firestore.collection('orders').get()
        .then(docs => {
            let orders = [];
            docs.forEach(function (doc) {
                orders.push({ ...doc.data(), id: doc.id });
            });
            return orders;
        });
    return orders;
}

export const getOrder = async (id) => {
    return await firestore.collection('orders').doc(id)
        .get()
        .then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                return null;
            }
        })
}