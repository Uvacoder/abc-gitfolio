import IconText from "../../shared/components/IconText";
import Star from "../../assets/images/star.svg";
import Fork from "../../assets/images/fork.svg";
import Issues from "../../assets/images/issues.svg";
import Close from "../../assets/images/close.svg";
import { useEffect, useState } from "react";
import { getRepoDetails } from "../../shared/api";
import { toast } from "react-toastify";

export default function Modal({ modalData, setModal }: any) {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      try {
        const data = await getRepoDetails(modalData.full_name);
        setData(data);
        setLoading(false);
      } catch (err) {
        toast.error("Some unknown error occured!");
        console.log(err);
      }
    })();
  }, [modalData.full_name]);
  console.log(modalData);
  return (
    <>
      <div className="fixed top-0 right-0 bg-black opacity-50 h-full w-full"></div>
      <div className="fixed top-1/2 left-1/2 shadow-lg rounded-lg transform -translate-y-1/2 -translate-x-1/2 bg-white w-11/12 lg:w-4/12 pb-4 min-h-80">
        {loading ? (
          <div className="h-full w-full flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex justify-between p-6 pb-2 mb-4 border-b border-gray">
              <h1 className="font-bold text-2xl">{data.name}</h1>
              <img
                src={Close}
                className="w-8 cursor-pointer"
                alt="close"
                onClick={() => {
                  setModal(false);
                }}
              />
            </div>
            <p className="px-6 mt-2">{data.description}</p>
            <div className="flex gap-2 px-6 mt-4">
              <IconText text={data.stargazers_count} img={Star} />
              <IconText text={data.forks_count} img={Fork} />
              <IconText text={data.open_issues_count} img={Issues} />
            </div>
            <div className="flex flex-col gap-2 px-6 mt-4">
              <p className="text-darkgray">
                Last Updated : {new Date(data.updated_at).toUTCString()}
              </p>
              <p className="text-darkgray">
                Created on : {new Date(data.created_at).toUTCString()}
              </p>
              <p className="text-darkgray">
                LICENSE :{" "}
                {data.license ? (
                  <a href={data.license.url} target="_blank" rel="noreferrer">
                    {data.license.name}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>
            <a
              href={data.html_url}
              target="_blank"
              className="mx-6 my-4 py-2 px-4 text-center bg-primary w-44 hover:bg-blue-700 text-white font-semibold rounded"
              rel="noreferrer"
            >
              Visit Repository
            </a>
          </div>
        )}
      </div>
    </>
  );
}
