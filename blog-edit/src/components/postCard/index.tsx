import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";

//postCard Components

interface CardProps {
  imgUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

export function CardComponent({
  title,
  description,
  imgUrl,
  createdAt,
}: CardProps) {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "15px",
      }}
    >
      <img
        alt="Sample"
        src={imgUrl}
        style={{ borderRadius: "10px", height: "rem" }}
      />

      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
        <Col>{createdAt}</Col>
      </CardBody>
    </Card>
  );
}
