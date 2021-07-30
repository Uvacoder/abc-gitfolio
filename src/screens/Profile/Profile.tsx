import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserDetails, getUserRepos } from "../../shared/api/api";
import Head from "./components/Head";
import RepoList from "./components/RepoList";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState();
  const [repoDetails, setRepoDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const allPromise = await Promise.all([
          getUserDetails(id),
          getUserRepos(id, 10),
        ]);
        setUser(allPromise[0]);
        setRepoDetails(allPromise[1]);
      } catch (err) {
        toast("No user found!");
        console.log(err);
      }
      setLoading(false);
    })();
  }, [id]);
  if (loading) {
    return <div>Loading</div>;
  }
  if (!user) {
    return <div>No User found</div>;
  }
  return (
    <div className="relative flex justify-start flex-col">
      <Head user={user} />
      <RepoList repoDetails={repoDetails} />
    </div>
  );
}
