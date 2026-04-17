import React, { useState } from "react";
import { FriendsTimelineContext } from "./FriendsTimelineContext";

const FriendsTimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const data = {
    timeline,
    setTimeline,
  };

  return (
    <FriendsTimelineContext.Provider value={data}>
      {children}
    </FriendsTimelineContext.Provider>
  );
};

export default FriendsTimelineProvider;
