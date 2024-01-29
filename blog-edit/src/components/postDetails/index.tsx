import React from "react";
import { Card, CardBody, CardText, CardTitle, Col } from "reactstrap";

interface PostProps {
  imgUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

export function PostComponent({ title, description, imgUrl }): PostProps {
  return (
    <Card
      style={{
        width: "50rem",
        padding: "20px",
      }}
    >
      <img
        alt="Sample"
        src={imgUrl}
        style={{ borderRadius: "15px", height: "200px", width: "400px" }}
      />

      <CardBody
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardTitle tag="h5">{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
}
