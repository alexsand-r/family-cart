import { useState, useEffect } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { HeaderForm } from "./components/HeaderForm";
import { List } from "./components/List";
import type { Product } from "./types/Product";
import { getProducts } from "./services/services";
import { updateProduct } from "./services/services";
import { deleteProduct } from "./services/services";
import { addProduct } from "./services/services";
import { Loader } from "./components/Loader";
import type { FilterStatus } from "./types/FilterStatus";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorDelete, setErrorDelete] = useState<string | null>(null);
  const [errorAdd, setErrorAdd] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterStatus>("all");

  const visibleProducts = products.filter((product) => {
    if (filter === "active") {
      return !product.completed;
    }
    if (filter === "completed") {
      return product.completed;
    }
    return true; // для 'all'
  });

  const addItem = (item: Product) => {
    addProduct(item)
      .then((newProductFromServer) => {
        setProducts((prev) => [...prev, newProductFromServer]);
      })
      .catch((error: Error) => {
        setErrorAdd(error.message);
        setTimeout(() => {
          setErrorAdd(null);
        }, 2000);
      });
  };

  const deleteItem = (id: string) => {
    setErrorDelete(null);
    deleteProduct(id)
      .then(() => {
        setProducts((prewproduct) =>
          prewproduct.filter((product) => product.id !== id),
        );
      })
      .catch((error: Error) => {
        setErrorDelete(error.message);
        setTimeout(() => {
          setErrorDelete(null);
        }, 2000);
      });
  };

  const clearCompleted = () => {
    const completedProducts = products.filter((product) => product.completed);
    const deletePromises = completedProducts.map((product) =>
      deleteProduct(product.id),
    );

    Promise.all(deletePromises)
      .then(() => {
        setProducts((prev) => prev.filter((p) => !p.completed));
      })
      .catch((error) => {
        console.error("Не вдалося видалити всі елементи", error);
      });
  };

  const toggleProduct = (id: string, currentCompleted: boolean) => {
    const previousProducts = [...products]; // Зберігаємо копію на випадок помилки
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, completed: !currentCompleted }
          : product,
      ),
    );

    updateProduct(id, { completed: !currentCompleted }).catch(() => {
      setProducts(previousProducts);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts()
        .then((data) => {
          setProducts(data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 300);
  }, []);

  return (
    <>
      <HeaderForm addItem={addItem} errorAdd={errorAdd} />
      {isLoading ? (
        <Loader />
      ) : (
        products.length > 0 && (
          <>
            <List
              products={visibleProducts}
              toggleProduct={toggleProduct}
              deleteItem={deleteItem}
              errorDelete={errorDelete}
            />
            <Footer
              products={products}
              filter={filter}
              setFilter={setFilter}
              clearCompleted={clearCompleted}
            />
          </>
        )
      )}
    </>
  );
}

export default App;
