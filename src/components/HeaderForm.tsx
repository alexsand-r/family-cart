// .. HeaderForm.tsx

export const HeaderForm = () => {
  return (
    <>
      <div className="my-container py-1">
        <h1 className="text-center text-2xl">Shopping List</h1>
        <form className="mx-auto mt-4 rounded-md flex w-full">
          <input
            id="title"
            type="text"
            placeholder="Add an item..."
            className="input input-success border-2 border-emerald-400 w-full grow mr-1.5"
          />

          <button className="btn btn-success text-white">Add</button>
        </form>
      </div>
    </>
  );
};
