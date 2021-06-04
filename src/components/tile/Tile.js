import React from "react";

export const Tile = ({obj}) => {
  const pData = [];
  for (const property in obj) {
    pData.push(`${property}: ${obj[property]}`);
  };
  return (
    <div className="tile-container">
      {pData.map(data => <p className="tile">{data}</p>)}
    </div>
  );
};
