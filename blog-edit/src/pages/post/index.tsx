import { Container } from "reactstrap";
import { PostComponent } from "../../components/postDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface PostProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: Date;
}

function PostPage() {
  const [post, setPost] = useState<PostProps | undefined>();
  const { id } = useParams();

  useEffect(() => {
    fetch("/posts.json")
      .then((resp) => resp.json())
      .then((resp: PostProps[]) => {
        const currentPost = resp.find((item) => item.id === id);
        setPost(currentPost);
      });
  }, [id]);

  if (!post) {
    return <div> Post não existe!</div>;
  }

  return (
    <Container>
      <PostComponent
        imgUrl={post.imageUrl}
        title={post.title}
        description={post.description}
      />
    </Container>
  );
}

export default PostPage;
