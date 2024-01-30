import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { CardComponent } from "../components/postCard";

interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  createdAt: Date;
}

function RootPage() {
  const [cardList, setCardList] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("posts.json")
      .then((resp) => resp.json())
      .then((posts: CardProps[]) => {
        setCardList(posts);
      });
  }, []);

  return (
    <Container>
      <Row xs="4">
        {cardList.map((card) => (
          <Col key={card.id}>
            <CardComponent
              id={card.id}
              imgUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              createdAt={card.createdAt}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RootPage;
