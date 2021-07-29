import { useEffect } from "react";
import { toast } from "react-toastify";
import { getUserDetails } from "../../shared/api/api";
import Head from "./components/Head";
import RepoList from "./components/RepoList";

export default function Profile() {
  useEffect(() => {
    (async () => {
      try {
        const data = await getUserDetails("harshgoel05");
        toast("Fetched user data!");
        console.log(data);
      } catch (err) {
        toast("Oopsie! Some error occured!");
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="relative flex justify-start flex-col">
      <Head />
      <RepoList />
    </div>
  );
}
