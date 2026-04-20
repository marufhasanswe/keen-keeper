import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsTimelineContext } from "../../context/FriendsTimelineContext";

const StatsPage = () => {
  const { timeline } = useContext(FriendsTimelineContext);

  const callCount = timeline.filter(
    (history) => history.type === "Call",
  ).length;

  const textCount = timeline.filter(
    (history) => history.type === "Text",
  ).length;
  const videoCount = timeline.filter(
    (history) => history.type === "Video",
  ).length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "orange" },
    { name: "Video", value: videoCount, fill: "tomato" },
  ];

  return (
    <div className="container mx-auto my-20 p-4">
      <h2 className="text-[#1F2937] font-bold text-3xl md:text-5xl">
        Friendship Analytics
      </h2>
      <div className="p-8 mt-6 rounded-lg bg-white">
        <p className="text-xl text-[#244D3F]">By Interaction Type</p>
        {callCount == 0 && textCount == 0 && videoCount == 0 ? (
          <h2 className="text-center text-3xl text-gray-300 py-8">
            No interaction
          </h2>
        ) : (
          <div className="text-center flex justify-center items-center ">
            <PieChart
              className="py-6"
              style={{
                width: "100%",
                maxWidth: "400px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
