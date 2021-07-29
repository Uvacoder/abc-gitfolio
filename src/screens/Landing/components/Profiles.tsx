import React from "react";
import ProfileCard from "./ProfileCard";

const arr = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
];

export default function Profiles() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-10">
      {arr.map((e, index) => {
        return <ProfileCard key={index} />;
      })}
    </div>
  );
}
