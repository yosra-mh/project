import { Container } from "@chakra-ui/layout";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

export default function Main({ accountImg, accountName, accountRole }) {
  return (
    <div className="s-layout__content">
      <Container
        id="section"
        display={{ base: "block", md: "flex" }}
        maxW="container.xl"
      >
        <Sidebar
          accountName={accountName}
          accountRole={accountRole}
          accountImg={accountImg}
        />

        <Content />
      </Container>
    </div>
  );
}
