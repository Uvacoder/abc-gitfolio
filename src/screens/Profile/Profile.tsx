import Head from "./components/Head";
import RepoList from "./components/RepoList";

export default function Profile() {
  return (
    <div className="relative w-screen flex justify-start flex-col ">
      <Head />
      <RepoList />
    </div>
  );
}
