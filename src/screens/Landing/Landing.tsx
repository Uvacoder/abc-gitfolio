import { useState } from "react";
import { getUser } from "../../shared/api/api";
import InfiniteScroll from "../../shared/components/InfiniteScroll";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";

export default function Landing() {
  return (
    <>
      <Hero />
      <ProfileSection></ProfileSection>
    </>
  );
}

function ProfileSection() {
  const [users, serUsers] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const hasMoreData = users.length < 1000;
  const PER_PAGE = 30;

  const loadMoreUsers = () => {
    setLoading(true);
    setTimeout(async () => {
      const newUsers = await getUser(page);
      const last = newUsers[PER_PAGE - 1].id;
      setPage((page) => page + last);
      serUsers((nums) => [...nums, ...newUsers]);
      setLoading(false);
    }, 300);
  };

  return (
    <>
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
      {loading && <div>Loading</div>}
    </>
  );
}
