import { SyncLoader } from "react-spinners";
import FriendCard from "../ui/FriendCard";
import useFriends from "../../hooks/useFriends";

const Friends = () => {
  const [friends, loading] = useFriends();
  return (
    <div className="mt-10 mb-20 container mx-auto p-4">
      <h3 className="text-2xl text-[#1F2937] font-semibold mb-4">
        Your Friends
      </h3>
      {loading && <SyncLoader className="text-center mt-10" />}

      <div className="container mx-auto grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
