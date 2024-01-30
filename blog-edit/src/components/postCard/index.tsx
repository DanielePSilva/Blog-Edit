import { Card, CardBody, CardText, CardTitle } from "reactstrap";

//postCard Components

interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  createdAt: Date;
}

export function CardComponent({ title, description, imgUrl, id }: CardProps) {
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
      </CardBody>
    </Card>
  );
}
