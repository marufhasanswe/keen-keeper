import React, { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import FriendCard from "../ui/FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="mt-10 mb-20 container mx-auto">
      <h3 className="text-2xl text-[#1F2937] font-semibold mb-4">
        Your Friends
      </h3>
      {loading && <SyncLoader className="text-center mt-10" />}

      <div className="container mx-auto grid grid-cols md:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
