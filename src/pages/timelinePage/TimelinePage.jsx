import React, { useContext, useState } from "react";
import { FriendsTimelineContext } from "../../context/FriendsTimelineContext";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
const TimelinePage = () => {
  const [filter, setFilter] = useState("All");
  const { timeline } = useContext(FriendsTimelineContext);
  const filterdTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="container mx-auto my-8 md:my-20 space-y-6 p-4">
      <h2 className="text-3xl md:text-5xl text-[#1F2937] font-bold">
        Timeline
      </h2>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="md:w-[347px] max-w-[300px] px-4 py-3 rounded shadow bg-white text-lg text-[#64748B]"
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option> <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>
      <div className="space-y-6">
        {filterdTimeline.length === 0 ? (
          <p className="text-center px-4 text-gray-400 py-10 md:py-20 bg-white rounded-md shadow text-2xl md:text-4xl">
            Timeline is empty
          </p>
        ) : (
          filterdTimeline.map((history, index) => (
            <div
              key={index}
              className="p-4 shadow bg-white flex items-center rounded-lg gap-4"
            >
              <img
                src={
                  history.type === "Call"
                    ? callImg
                    : history.type === "Text"
                      ? textImg
                      : videoImg
                }
                alt=""
                className="w-[40px] h-[40px]"
              />
              <div>
                <h3 className=" text-xl text-[#64748B]">
                  <span className="font-bold text-[#244D3F]">
                    {history.type}
                  </span>
                  with {history.name}
                </h3>
                <p>
                  {new Date(history.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default TimelinePage;
