import React from "react";

const RecentHistory = ({
  recentHistory,
  setSelectedHistory,
  setRecentHistory,
}) => {
  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const clearSelectedHistory = (selectItem) => {
    let history = JSON.parse(localStorage.getItem("history"));
    history = history.filter((item) => {
      if (item != selectItem) {
        return item;
      }
    });
    setRecentHistory(history);
    localStorage.setItem("history", JSON.stringify(history));
  };

  return (
    <>
      <div className="col-span-1 dark:bg-zinc-800 bg-blue-50 pt-3">
        <h1 className="text-xl dark:text-white text-zinc-900 flex justify-center">
          {" "}
          <span> Recent Search</span>{" "}
          <button
            className="cursor-pointer hover:bg-zinc-900 bg-zinc-700"
            onClick={clearHistory}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>

        <ul className="text-left overflow-auto text-sm m-5">
          {recentHistory &&
            recentHistory.map((item, index) => (
              <div className="flex justify-between pr-1 py-1" key={index}>
                <li
                  onClick={() => setSelectedHistory(item)}
                  key={index} // Or better: use a unique ID if available
                  className="w-full text-zinc-600 truncate p-1 pl-5 px-5 cursor-pointer dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:bg-white hover:text-zinc-900"
                >
                  {item}
                </li>
                <button
                  className="cursor-pointer hover:bg-zinc-900 bg-zinc-700"
                  onClick={() => clearSelectedHistory(item)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#e3e3e3"
                  >
                    <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
                  </svg>
                </button>
              </div>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentHistory;
