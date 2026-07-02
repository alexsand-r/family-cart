// .. List.tsx
import { useState } from "react";
import type { Product } from "../types/Product";
interface ListProps {
  products: Product[];
  toggleProduct: (id: string, currentCompleted: boolean) => void;
  deleteItem: (id: string) => void;
  errorDelete: string | null;
}

export const List = ({
  products,
  toggleProduct,
  deleteItem,
  errorDelete,
}: ListProps) => {
  return (
    <>
      <div className="overflow-x-auto my-container">
        {errorDelete && (
          <div className="text-2xl text-red-600 text-center">
            {" "}
            {errorDelete}
          </div>
        )}

        <table className="table text-xl">
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="w-17">
                  <button
                    type="button"
                    className="w-6 h-6 border-2 border-gray-400 rounded-full flex justify-center items-center cursor-pointer"
                    onClick={() => toggleProduct(product.id, product.completed)}
                  >
                    {product.completed && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="size-5 text-green-500 pt-0.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </button>
                </td>
                <td>
                  <span className={product.completed ? "line-through" : ""}>
                    {product.name}
                  </span>
                </td>

                <td>
                  <div className="flex justify-end items-center">
                    <button
                      type="button"
                      className="btn btn-ghost btn-circle btn-sm text-error"
                      onClick={() => deleteItem(product.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
