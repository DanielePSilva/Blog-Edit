import { Card, CardBody, CardText, CardTitle } from "reactstrap";

interface PostProps {
  imgUrl: string;
  title: string;
  description: string;
}

export function PostComponent({ title, description, imgUrl }: PostProps) {
  return (
    <Card
      style={{
        width: "100%",
        background: "black",
        borderRadius: "15px",
      }}
    >
      <CardBody
        style={{
          display: "flex",
        }}
      >
        <img
          alt="Sample"
          src={imgUrl}
          style={{ borderRadius: "15px", height: "400px", width: "500px" }}
        />
        <div
          style={{
            padding: "10px",
          }}
        >
          <CardTitle style={{ color: "white" }} tag="h5">
            {title}
          </CardTitle>
          <CardText
            style={{
              padding: "10px",
              color: "white",
            }}
          >
            {description}
          </CardText>
        </div>
      </CardBody>
    </Card>
  );
}
