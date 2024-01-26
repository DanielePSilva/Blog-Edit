import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

// const postList [
//   {
//       id: "1291dec2-7836-41d2-a80c-37bea30316ba",
//       title: "Meu primeiro post",
//       imageUrl: "url da imagem aqui",
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//       createdAt: "2023-01-21T00:00:00.000Z"
//   },
//   {
//       id: "127908ea-64aa-45cc-b413-038f842e4297",
//       title: "Meu segundo post",
//       imageUrl: "url da imagem aqui",
//       description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//       createdAt: "2023-01-10T00:00:00.000Z"
//   }
// ]

function RootPage() {
  return (
    <Card
      style={{
        width: "18rem",
        padding: "15px",
      }}
    >
      <img alt="Sample" src="https://picsum.photos/300/200" />

      <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card‘s content.
        </CardText>
      </CardBody>
    </Card>
  );
}

export default RootPage;
