const Pool = () => {
  return (
    <div
      style={{
        border: "1px solid white",
        height: "auto",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="ml-10 mr-10 mt-10 mb-10"
        style={{
          backgroundColor: "#fff",
          height: "auto",
          borderRadius: "5px",
        }}
      >
       <table className="w-full border">
  <tbody>
    <tr className="flex flex-wrap">
      <td className="w-full md:w-1/4 p-4 text-center">
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
          <button id="Saldo" className="bg-transparent border-2 border-teal-500 rounded-full p-2 w-10vw h-10vw">
          <svg
                      className="h-6 w-6 text-teal-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-1.68 0-3.09-.84-4-2.05-.9-1.15-1.26-2.57-1.03-4.18.22-1.68 1.02-3.08 2.15-4.08 1.12-1.02 2.52-1.45 4.03-1.27 1.41.17 2.6.86 3.4 1.85.7.99 1.04 2.21.9 3.5-.15 1.44-.79 2.68-1.8 3.47-.76.53-1.66.95-2.64 1.16-.33.05-.66.07-1 .07z"
                      />
                    </svg>
          </button>
          <p className="ml-5">Balance Rp.0,00</p>
        </div>
      </td>
      <td className="w-full md:w-1/4 p-4 text-center">
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
          <button className="bg-transparent border-2 border-teal-500 rounded-full p-2 w-10vw h-10vw">
          <svg
                      className="h-6 w-6 text-teal-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 10l-3-3m0 0L2 10m3-3l3 3m5-5L4 20h16l-2-13M2 10h18"
                      />
                    </svg>
          </button>
          <p className="ml-5">Item</p>
        </div>
      </td>
      <td className="w-full md:w-1/4 p-4 text-center">
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
          <button className="bg-transparent border-2 border-teal-500 rounded-full p-2 w-10vw h-10vw">
          <svg
                      className="h-6 w-6 text-teal-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
          </button>
          <p className="ml-5">Done</p>
        </div>
      </td>
      <td className="w-full md:w-1/4 p-4 text-center">
        <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
          <button className="bg-transparent border-2 border-teal-500 rounded-full p-2 w-10vw h-10vw">
          <svg
                      className="h-6 w-6 text-teal-500 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9 6M5 14l9 6M3 21l3-1M18 21l3-1M21 4h-6M3 4h6"
                      />
                    </svg>
          </button>
          <p className="ml-5">Date</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
  );
};

export default Pool;
