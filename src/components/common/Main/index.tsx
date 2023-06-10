import { useState, MouseEvent, ChangeEvent, useContext } from "react";
import RecipeCard from "../RecipeCard";

import { Container, Top } from "./styled";
import { CardData } from "@/interface/recipe";

const Main = () => {
  const domyData: CardData[] = [
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
    {
      img: "../../public/11.png",
      title: "레시피 제목",
      id: "wjs2282",
      viewCount: 10,
      date: "2023-06-10",
    },
  ];

  return (
    <Container>
      <Top>{10}개의 레시피가 있습니다.</Top>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 200px)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {domyData
          .filter((item, i) => i < 8)
          .map((item, i) => (
            <RecipeCard key={i} data={item} />
          ))}
      </div>
      <div
        style={{
          width: "calc(100% - 60px)",
          height: "100px",
          marginLeft: "30px",
          marginRight: "30px",
          borderTop: "1px solid #FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "540px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ">"].map((i) => (
            <a
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#4d5669",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                color: "#FFFFFF",
                boxShadow: "none",
              }}
            >
              {i}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Main;
