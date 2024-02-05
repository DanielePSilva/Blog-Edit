import { Col, Container, Row } from "reactstrap";
import { CardComponent } from "../components/postCard";
import useRootPage from "../hooks/useRootPage";
import SelectComponent from "../components/select";

function RootPage() {
  const { cardList, handleCardClick, selectValue, handleSelect } =
    useRootPage();

  return (
    <Container>
      <SelectComponent value={selectValue} onChange={handleSelect} />

      <Row lg="4">
        {cardList.map((card) => (
          <Col key={card.id}>
            <CardComponent
              id={card.id}
              imgUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              handleCardClick={handleCardClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RootPage;
