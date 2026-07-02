// .. HeaderForm.tsx
import { useState } from "react";
import type { Product } from "../types/Product";

interface HeaderFormProps {
  addItem: (item: Product) => void;
  errorAdd: string | null;
}

export const HeaderForm = ({ addItem, errorAdd }: HeaderFormProps) => {
  const [title, setTitle] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.trim());
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: title,
      completed: false,
    };

    if (!newProduct) {
      return;
    }

    addItem(newProduct);
    setTitle("");
  };
  return (
    <>
      <div className="my-container py-1">
        <h1 className="text-center text-2xl">Shopping List</h1>

        <form
          className="mx-auto mt-4 rounded-md flex w-full"
          onSubmit={handleSubmit}
        >
          <input
            value={title}
            onChange={handleTitle}
            id="title"
            type="text"
            placeholder="Add an item..."
            className="input input-success border-2 border-emerald-400 w-full grow mr-1.5"
          />
          <button type="submit" className="btn btn-success text-white">
            Add
          </button>
        </form>

        {errorAdd && (
          <div className="text-2xl text-red-600 text-center"> {errorAdd}</div>
        )}
      </div>
    </>
  );
};
