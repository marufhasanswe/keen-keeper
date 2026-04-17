import React from "react";
const FriendCard = ({ friend }) => {
  return (
    <div className="p-6 shadow bg-white rounded-lg text-center">
      <img
        src={friend.picture}
        alt=""
        className="h-20 w-20 rounded-full mx-auto"
      />
      <div className="space-y-2 mt-4">
        <h3 className="text-xl text-[#1F2937] font-semibold">{friend.name}</h3>
        <p className="text-[12px] text-[#64748B]">
          {friend.days_since_contact}d ago
        </p>
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="text-[#244D3F] text-[12px] font-medium uppercase bg-[#CBFADB] rounded-full px-2.5 py-1 align-middle inline-block mr-1"
          >
            {tag}
          </span>
        ))}
        <p>
          <button
            className={`px-2.5 py-1 rounded-full capitalize text-white font-medium text-[12px] ${friend.status === "overdue" ? "bg-[#EF4444]" : friend.status === "almost due" ? "bg-[#EFAD44]" : "bg-[#244D3F]"}`}
          >
            {friend.status}
          </button>
        </p>
      </div>
    </div>
  );
};

export default FriendCard;
