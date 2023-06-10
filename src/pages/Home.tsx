import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/common/Main";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  border: 1px solid red;
  display: flex;
`;

const SideNav = styled.div`
  width: 250px;
  height: 100%;
  border: 1px solid red;
`;

const Home = () => {
  return (
    <BaseLayout>
      <Navbar />
      <Container>
        <SideNav></SideNav>
        <Main></Main>
      </Container>
    </BaseLayout>
  );
};

export default Home;
