import React from "react";
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
        padding: "30px",
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
          style={{ borderRadius: "15px", height: "200px", width: "300px" }}
        />
        <div
          style={{
            padding: "15px",
          }}
        >
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{description}</CardText>
        </div>
      </CardBody>
    </Card>
  );
}
