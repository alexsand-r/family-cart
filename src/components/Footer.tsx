// ..Footer.tsx

export const Footer = () => {
  return (
    <>
      <div className="w-full my-container flex justify-between items-center pb-4 flex-col gap-3">
        <div>
          <span>3</span>
          <span>- items</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <button className="btn">All</button>
            <button className="btn">Completed</button>
            <button className="btn">Active</button>
          </div>
          <div className="flex justify-center">
            <button className="btn">Clear completed</button>
          </div>
        </div>
      </div>
    </>
  );
};
