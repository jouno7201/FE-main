import { useState, MouseEvent, ChangeEvent, useContext } from "react";

import { CardData } from "@/interface/recipe";

interface RecipeCardProps {
  data: CardData;
}

const RecipeCard = ({ data }: RecipeCardProps) => {
  return (
    <div
      style={{
        width: "360px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "190px",
          backgroundColor: "#888888",
          borderRadius: "20px",
          backgroundImage: `url("../../public/11.png")`,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "#888888",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>{data.title}</div>
        <div>{data.id}</div>
        <div>
          {data.viewCount}/{data.date}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
