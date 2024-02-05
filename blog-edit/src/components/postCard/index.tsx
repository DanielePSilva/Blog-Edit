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
        padding: "10px",
        width: "20rem",
        height: "35rem",
        borderRadius: "15px",
        background: "black",
        cursor: "pointer",
        marginTop: "30px",
      }}
      onClick={() => handleCardClick(id)}
    >
      <img
        alt="Sample"
        src={imgUrl}
        style={{ borderRadius: "15px", height: "300px", width: "300px" }}
      />

      <CardBody>
        <CardTitle
          style={{
            color: "white",
          }}
          tag="h6"
        >
          {title}
        </CardTitle>
        <CardText
          style={{
            padding: "10px",
            fontSize: "12px",
            gap: "30px",
            color: "white",
          }}
        >
          {description}
        </CardText>
      </CardBody>
    </Card>
  );
}
