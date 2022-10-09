import React from "react";

const ArtistNew = () => {
  return (
    <div className="w-1/4">
      <img src={"/artists/giphy.gif"} />
      <img
        className="w-1/4 hover:opacity-0"
        style={{ position: "absolute", top: "750px" }}
        src={"/artists/Frame.png"}
      />
    </div>
  );
};

export default ArtistNew;
