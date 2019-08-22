import React from "react";
import { useTransition } from "react-spring";
import { WatchListSideBar, WatchListFooter } from "./styles";

interface IWatchListProps {
  isOpen: boolean;
  onWatchListClose: () => void;
}

const WatchList: React.FC<IWatchListProps> = ({ isOpen, onWatchListClose }) => {
  // Ignore this, handles the slidey in animation for the watch list side bar
  const entryTransition = useTransition(isOpen, null, {
    from: { transform: "translateX(100%" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(100%)" }
  });

  return (
    <React.Fragment>
      {entryTransition.map(
        ({ item, key, props }) =>
          item && (
            <WatchListSideBar key={key} style={props}>
              <button onClick={onWatchListClose}>close</button>
              <WatchListFooter>{/* Footer */}</WatchListFooter>
            </WatchListSideBar>
          )
      )}
    </React.Fragment>
  );
};

export default WatchList;
