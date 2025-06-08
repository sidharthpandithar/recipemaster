import { use, useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Fooddetail from "./components/Fooddetail";

export default function App() {
  const [foodid, setFoodID] = useState("");
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <Foodlist setFoodID={setFoodID} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <Fooddetail foodid={foodid} />
        </InnerContainer>
      </Container>
    </div>
  );
}
