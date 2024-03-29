import React from "react";

export default function ExpenseCard({
  title,
  balance,
  buttonName,
  changeBalance,
}) {
  return (
    <div className="bg-red-200 flex flex-col items-center justify-center w-[30%] h-[200px] rounded-xl gap-3">
      <p className="text-2xl font-semibold">
        {title}: <span>{balance}</span>
      </p>
      <button
        className={`${
          buttonName === "Income" ? "bg-green-500" : "bg-red-500"
        } text-white font-semibold p-1 px-2 rounded-lg`}
        onClick={changeBalance}
      >
        + Add {buttonName}
      </button>
    </div>
  );
}
