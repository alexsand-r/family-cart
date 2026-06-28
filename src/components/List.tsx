// .. List.tsx

export const List = () => {
  return (
    <>
      <div className="overflow-x-auto my-container">
        <table className="table text-xl">
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>
                <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor"
                    className="size-5 text-green-500 pt-0.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
              </td>
              <td className="line-through">
                Cy Ganderton Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </td>
              <td>
                <div className="flex justify-end items-center">
                  <button className="btn btn-ghost btn-circle btn-sm text-error">
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
          </tbody>
        </table>
      </div>
    </>
  );
};
