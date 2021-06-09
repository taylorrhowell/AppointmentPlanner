import React from "react";

export const Tile = ({obj}) => {
  const pData = [];
  for (const property in obj) {
    pData.push(`${property}: ${obj[property]}`);
  };
  return (
    <div className="tile-container">
      {pData.map(function(data, dataIdx) {
        if (dataIdx === 0) {
          return <p className="title-tile">{data}</p>
        } else {
        return <p className="tile">{data}</p>
        }
      })
      }
    </div>
  );
};
