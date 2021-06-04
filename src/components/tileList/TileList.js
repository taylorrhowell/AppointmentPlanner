import React from "react";
import { Tile } from "../../components/tile/Tile"

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((obj, objIdx) => {
        return <Tile obj={obj} key={objIdx} />
      } )}
    </div>
  );
};
