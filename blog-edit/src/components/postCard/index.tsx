import { Card, CardBody, CardText, CardTitle } from "reactstrap";

//postCard Components

interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  handleCardClick: (id: string) => void;
}

export function CardComponent({
  id,
  title,
  description,
  imgUrl,
  handleCardClick,
}: CardProps) {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "10px",
        height: "43rem",
        cursor: "pointer",
      }}
      onClick={() => handleCardClick(id)}
    >
      <img alt="Sample" src={imgUrl} style={{ borderRadius: "15px" }} />

      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText style={{ padding: "5px" }}>{description}</CardText>
      </CardBody>
    </Card>
  );
}
