// // .. services.ts
// import type { Product } from "../types/Product";

// const LINK_SERVER = "http://localhost:3000/items";

// export function getProducts(): Promise<Product[]> {
//   return fetch(LINK_SERVER).then((response) => {
//     if (!response.ok) {
//       throw new Error("error");
//     }

//     return response.json();
//   });
// }

// // Додаємо функцію оновлення
// export function updateProduct(
//   id: string,
//   updatedData: Partial<Product>,
// ): Promise<Product> {
//   return fetch(`${LINK_SERVER}/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Помилка оновлення");
//       }

//       return response.json();
//     })
//     .then((product) => {
//       return new Promise<Product>((resolve) => {
//         setTimeout(() => {
//           resolve(product);
//         }, 1000); // затримка 1 секунда
//       });
//     });
// }

// // видалення
// export function deleteProduct(id: string): Promise<void> {
//   return fetch(`${LINK_SERVER}/${id}`, { method: "DELETE" }).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error("Помилка при видаленні на сервері");
//       }
//     },
//   );
// }

// // додавання
// // .. services.ts

// export function addProduct(product: Product): Promise<Product> {
//   return fetch(LINK_SERVER, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(product),
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error("Помилка при додаванні на сервері");
//     }
//     return response.json();
//   });
// }
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import type { Product } from "../types/Product";

const COLLECTION_NAME = "products";

export async function getProducts(): Promise<Product[]> {
  const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
  return querySnapshot.docs.map((doc) => ({
    ...(doc.data() as Product),
    id: doc.id, // Firestore використовує doc.id
  }));
}

export async function updateProduct(
  id: string,
  updatedData: Partial<Product>,
): Promise<Product> {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, updatedData);
  // Повертаємо об'єкт для сумісності з вашим .then() в App.jsx
  return { id, ...updatedData } as Product;
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION_NAME, id));
}

export async function addProduct(product: Product): Promise<Product> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), product);
  return { ...product, id: docRef.id };
}
