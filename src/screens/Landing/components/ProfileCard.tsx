import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-white border m-4 border-gray rounded-md w-56 p-6 flex flex-col justify-center items-center gap-3">
      <img
        className="w-48 rounded"
        src="https://avatars.githubusercontent.com/u/1?v=4"
        alt="user"
      />
      <h4 className="font-semibold text-xl">harshgoel05</h4>
      <button className="bg-primary hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
        Visit Profile
      </button>
    </div>
  );
}
