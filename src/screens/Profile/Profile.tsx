import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getFewUserRepos, getUserDetails } from "../../shared/api";
import ErrorScreen from "../../shared/components/ErrorScreen";
import Head from "./components/Head";
import RepoList from "./components/RepoList";
import NotFound from "../../assets/images/vectors/notfound.svg";
import Loader from "../../shared/components/Loader";

export default function Profile() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>();
  const [repoDetails, setRepoDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const promises = await Promise.all([
          getUserDetails(id),
          getFewUserRepos(id, 10),
        ]);
        setUser(promises[0]);
        setRepoDetails(promises[1]);
      } catch (err) {
        toast.error("No user found!");
        console.log(err.data);
      }
      setLoading(false);
    })();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return (
      <>
        <ErrorScreen
          text="No Profile found, Please recheck the URL."
          img={NotFound}
        />
      </>
    );
  }
  return (
    <div className="relative flex justify-start flex-col">
      <Head user={user} />
      <RepoList repoDetails={repoDetails} user={user} />
    </div>
  );
}
