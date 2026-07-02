// ..Footer.tsx
import type { Product } from "../types/Product";
import type { FilterStatus } from "../types/FilterStatus";

interface FooterProps {
  products: Product[];
  filter: FilterStatus;
  setFilter: (filter: FilterStatus) => void;
  clearCompleted: () => void;
}

export const Footer = ({
  products,
  filter,
  setFilter,
  clearCompleted,
}: FooterProps) => {
  const activeProduct = products.filter((el) => !el.completed);

  return (
    <>
      <div className="w-full my-container flex flex-col md:flex-row justify-between items-center pb-4 gap-3">
        <div>
          <span>{activeProduct.length}</span>
          <span> - products</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex gap-5">
            <button
              className={filter === "all" ? "btn btn-active" : "btn"}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "completed" ? "btn btn-active" : "btn"}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
            <button
              className={filter === "active" ? "btn btn-active" : "btn"}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
          </div>
          <div className="flex justify-center">
            <button className="btn" onClick={clearCompleted}>
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
// btn-active
