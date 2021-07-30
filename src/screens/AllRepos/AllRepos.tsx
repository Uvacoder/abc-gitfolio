import { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserRepos } from "../../shared/api/api";
import IconText from "../../shared/components/IconText";
import InfiniteScroll from "../../shared/components/InfiniteScroll";
import Star from "../../assets/images/star.svg";
import Fork from "../../assets/images/fork.svg";
import Issues from "../../assets/images/issues.svg";
import NotFound from "../../assets/images/vectors/notfound.svg";

import { toast } from "react-toastify";
import ErrorScreen from "../../shared/components/ErrorScreen";

export default function AllRepos() {
  const { id } = useParams<{ id: string }>();
  const [repos, setRepos] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  const [loading, setLoading] = useState(false);
  const loadMoreRepositories = async () => {
    try {
      setLoading(true);
      const newRepos = await getUserRepos(id, page);
      if (newRepos.length === 0) {
        setHasMoreData(false);
      }
      setPage((page) => page + 1);
      setRepos((nums: any) => [...nums, ...newRepos]);
    } catch (err) {
      toast.error("Ooops! Some unknown error occured!");
    }
    setLoading(false);
  };

  if (!repos) {
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
    <div className="bg-white w-11/12 mx-auto mt-20 border border-gray rounded-md my-8">
      <Header id={id} />
      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={loadMoreRepositories}
        loadOnMount={true}
        classNames=""
      >
        {repos.map((repo, index) => {
          console.log(repo);
          return <Repo repo={repo} />;
        })}
      </InfiniteScroll>
      {loading && <div className="loader-small my-20"></div>}
    </div>
  );
}

interface Props {
  id: string;
}
export function Header({ id }: Props) {
  return (
    <div className="flex p-6 justify-between border-gray border-b mb-6">
      <h1 className="font-bold">{id}'s Repository</h1>
    </div>
  );
}

export function Repo({ repo }: any) {
  return (
    <div className="flex flex-col md:flex-row p-6 justify-between items-center border mx-4 sm:mx-8 my-4 border-primary rounded-md">
      <div className="flex flex-col gap-2 md:w-10/12 xl:w-11/12">
        <h1 className="font-bold text-2xl gradient-text">{repo.name}</h1>
        <p>
          {repo.description ||
            "There's no description for this repository as of now!"}
        </p>
        <div className="flex gap-2 mt-2">
          <IconText text={repo.stargazers_count} img={Star} />
          <IconText text={repo.forks_count} img={Fork} />
          <IconText text={repo.open_issues_count} img={Issues} />
        </div>
      </div>
      <div className="md:w-2/12 xl:w-1/12 mt-4 sm:mt-0">
        <p className="border-primary text-primary border-2 rounded-full px-2 py-1 text-center">
          {repo.language}
        </p>
      </div>
    </div>
  );
}
