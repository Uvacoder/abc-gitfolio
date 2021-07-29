import IconText from "../../shared/components/IconText";

export default function Profile() {
  return (
    <div className="relative w-screen flex justify-center">
      <div className="absolute top-0 left-0 right-0 gradient-bg h-72 w-screen -z-10" />
      <div className="bg-white border border-gray rounded-md w-10/12 mt-32 flex flex-col md:flex-row p-6 gap-5">
        <img
          className="w-48 rounded"
          src="https://avatars.githubusercontent.com/u/1?v=4"
          alt="user"
        />
        <div className="mt-4">
          <h1 className="gradient-text font-bold text-4xl">Harsh Goyal</h1>
          <div className="flex gap-4 mt-4">
            <IconText
              img="http://simpleicon.com/wp-content/uploads/link-2.svg"
              text="20"
            />
            <IconText
              img="http://simpleicon.com/wp-content/uploads/link-2.svg"
              text="20"
            />
          </div>
          <IconText
            img="http://simpleicon.com/wp-content/uploads/link-2.svg"
            text="243 Followers || 243 Following"
          />
          <IconText
            img="http://simpleicon.com/wp-content/uploads/link-2.svg"
            text="20"
          />
        </div>
      </div>
    </div>
  );
}
