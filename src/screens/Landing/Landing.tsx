import { useState } from "react";
import { getUser } from "../../shared/api/api";
import InfiniteScroll from "../../shared/components/InfiniteScroll";
import ProfileCard from "./components/ProfileCard";

export default function Landing() {
  const [users, serUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [hasMoreData, setHasMoreData] = useState(true);

  const updateSearch = (value: any) => {
    // Add debouncing
    setSearch(value);
    // console.log(value);
    // serUsers([]);
    // loadMoreUsers();
  };

  const PER_PAGE = 30;

  const loadMoreUsers = () => {
    setLoading(true);
    // if (search) {
    //   setTimeout(async () => {
    //     const newUsers = await searchUsers(search);
    //     const last = newUsers[PER_PAGE - 1].id;
    //     setPage((page) => page + last);
    //     serUsers((nums) => [...nums, ...newUsers]);
    //     setLoading(false);
    //   }, 300);
    // } else {
    setTimeout(async () => {
      const newUsers = await getUser(page);
      if (newUsers.length === 0) {
        setHasMoreData(false);
      }
      const last = newUsers[PER_PAGE - 1].id;
      setPage((page) => page + last);
      serUsers((nums) => [...nums, ...newUsers]);
      setLoading(false);
    }, 300);
    // }
  };

  return (
    <>
      <div className="gradient-bg h-96 flex justify-center items-center flex-col">
        <h1 className="text-4xl lg:text-6xl text-white font-bold text-center w-11/12">
          Build with us. Code with us
        </h1>
        <div className="p-8 mt-6 w-full">
          <div className="bg-white flex mx-auto justify-center items-center rounded-full shadow-xl w-3/4 md:w-1/2">
            <input
              className="rounded-l-full w-10/12 py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              value={search}
              onChange={(event) => updateSearch(event?.target.value)}
              placeholder="Find some awesome developers here! (still in progress)"
            />
            {search && search.length && (
              <div className="p-4">
                <button className="bg-blue-500 text-secondary rounded-full p-2 hover:bg-blue-400 focus:outline-none h-4 flex items-center justify-center">
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <InfiniteScroll
        hasMoreData={hasMoreData}
        isLoading={loading}
        onBottomHit={loadMoreUsers}
        loadOnMount={true}
        classNames="flex flex-row flex-wrap justify-center items-center mt-10"
      >
        {users.map((user, index) => {
          return <ProfileCard user={user} key={index} />;
        })}
      </InfiniteScroll>
      {loading && <div className="loader-small my-20"></div>}
    </>
  );
}
