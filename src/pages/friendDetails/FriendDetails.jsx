import React, { useContext } from "react";
import useFriends from "../../hooks/useFriends";
import { SyncLoader } from "react-spinners";
import { Link, useParams } from "react-router";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FriendsTimelineContext } from "../../context/FriendsTimelineContext";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const [friends, loading] = useFriends();
  const { id } = useParams();
  const { timeline, setTimeline } = useContext(FriendsTimelineContext);
  if (friends.length === 0) {
    return loading && <SyncLoader className="text-center mt-10" />;
  }
  const expectedFriend = friends.find((friend) => friend.id == id);

  const handleCallBtn = (name) => {
    const history = {
      name: name,
      type: "Call",
    };
    setTimeline([...timeline, history]);
    toast.success(`Call with ${name}`);
  };

  const handleTextBtn = (name) => {
    const history = {
      name: name,
      type: "Text",
    };
    setTimeline([...timeline, history]);
    toast.success(`Text with ${name}`);
  };
  const handleVideoBtn = (name) => {
    const history = {
      name: name,
      type: "Video",
    };
    setTimeline([...timeline, history]);
    toast.success(`Video with ${name}`);
  };

  return (
    <div className="grid grid-cols md:grid-cols-5 md:grid-rows-3 gap-6 container mx-auto my-20 p-4">
      <div className="md:row-span-3 md:col-span-2 ">
        <div className="p-6 mb-4 shadow bg-white rounded-lg text-center">
          <img
            src={expectedFriend.picture}
            alt=""
            className="h-20 w-20 rounded-full mx-auto"
          />
          <div className="space-y-3 mt-4">
            <h3 className="text-xl text-[#1F2937] font-semibold">
              {expectedFriend.name}
            </h3>
            <p>
              <button
                className={`px-2.5 py-1 rounded-full capitalize text-white font-medium text-[12px] ${expectedFriend.status === "overdue" ? "bg-[#EF4444]" : expectedFriend.status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}
              >
                {expectedFriend.status}
              </button>
            </p>
            <div className="flex items-center py-3 justify-center">
              {expectedFriend.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-[#244D3F] text-[12px] font-medium uppercase bg-[#CBFADB] rounded-full px-2.5 py-1 align-middle inline-block mr-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-[#64748B] text-[16px] font-medium italic">
            "{expectedFriend.bio}"
          </p>
          <p className="text-[#64748B]">{expectedFriend.email}</p>
        </div>
        <button className="btn w-full mb-2.5">
          <RiNotificationSnoozeLine /> Snooze 2 Weeks
        </button>
        <button className="btn w-full mb-2.5">
          <FiArchive /> Archive
        </button>
        <button className="btn w-full text-red-500 mb-2.5">
          <RiDeleteBinLine /> Delete
        </button>
      </div>
      <div className="py-8 px-4 shadow bg-white text-center rounded-lg">
        <h3 className="text-[#244D3F] text-[30px] font-semibold">
          {expectedFriend.days_since_contact}
        </h3>
        <p className="text-xl text-[#64748B] mt-2 text-[16px]">
          Days Since Contact
        </p>
      </div>
      <div className="py-8 px-4 shadow bg-white text-center rounded-lg">
        <h3 className="text-[#244D3F] text-[30px] font-semibold">
          {expectedFriend.goal}
        </h3>
        <p className="text-xl text-[#64748B] mt-2 text-[16px]">Goal (Days)</p>
      </div>
      <div className="py-8 px-4 shadow bg-white text-center rounded-lg">
        <h3 className="text-[#244D3F] text-[30px] font-semibold">
          {new Date(expectedFriend.next_due_date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h3>
        <p className="text-xl text-[#64748B] mt-2 text-[16px]">Next Due</p>
      </div>
      <div className="md:col-span-3 py-8 px-4 shadow bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <h5 className="text-xl text-[#244D3F] font-medium">
            Relationship Goal
          </h5>

          <button className="btn font-normal">Edit</button>
        </div>
        <p className="text-lg text-[#64748B] mt-4">
          Connect every{" "}
          <span className="font-bold text-black">
            {expectedFriend.goal} days
          </span>
        </p>
      </div>
      <div className="md:col-span-3 py-4 px-4 shadow bg-white rounded-lg">
        <h5 className="text-xl text-[#244D3F] font-medium">Quick Check-In</h5>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <button
            className="inline-block cursor-pointer text-center rounded-lg p-4 bg-[#F8FAFC]"
            onClick={() => handleCallBtn(expectedFriend.name)}
          >
            <PiPhoneCallBold className="mx-auto text-2xl" />
            <span className=" text-sm text-[#64748B]">Call</span>
          </button>

          <button
            className=" cursor-pointer text-center rounded-lg p-4 bg-[#F8FAFC]"
            onClick={() => handleTextBtn(expectedFriend.name)}
          >
            <MdOutlineTextsms className="mx-auto text-2xl" />
            <span className="text-sm text-[#64748B]">Text</span>
          </button>

          <button
            className="cursor-pointer text-center rounded-lg p-4 bg-[#F8FAFC]"
            onClick={() => handleVideoBtn(expectedFriend.name)}
          >
            <HiOutlineVideoCamera className="mx-auto text-2xl" />
            <span className="text-sm text-[#64748B]">Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
