import { Col, Container, Row } from "reactstrap";
import { CardComponent } from "../components/postCard";
import useRootPage from "../hooks/useRootPage";

function RootPage() {
  const { cardList, handleCardClick, selectValue, handleSelect } =
    useRootPage();

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "3rem",
        }}
      >
        <select value={selectValue} onChange={handleSelect}>
          <option value="newest">Mais Recente</option>
          <option value="oldest"> Mais Antigo</option>
        </select>
      </div>

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
