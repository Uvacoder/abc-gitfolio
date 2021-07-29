import React from "react";
import { random } from "../../../shared/constant";
import ProfileCard from "./ProfileCard";

export default function Profiles() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center mt-10">
      {random.map((e, index) => {
        return <ProfileCard key={index} />;
      })}
    </div>
  );
}
