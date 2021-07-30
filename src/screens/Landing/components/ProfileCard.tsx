import { NavLink } from "react-router-dom";

export default function ProfileCard({ user }: any) {
  return (
    <div className="bg-white border m-4 border-gray rounded-md w-56 p-6 flex flex-col justify-center items-center gap-3">
      <img className="w-48 rounded" src={user.avatar_url} alt="user" />
      <h4 className="font-semibold text-xl">{user.login}</h4>
      <NavLink
        to={"/profile/" + user.login}
        className="bg-primary hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
        rel="noreferrer"
      >
        Visit Profile
      </NavLink>
    </div>
  );
}
