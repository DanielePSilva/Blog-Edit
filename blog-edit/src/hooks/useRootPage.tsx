import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function useRootPage() {
  const [cardList, setCardList] = useState<CardProps[]>([]);
  const [selectValue, setSelectValue] = useState<string>("newest");
  const navigate = useNavigate();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const handleCardClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  const handlePostSorted = (posts: CardProps[]) => {
    if (selectValue === "newest") {
      const sortedPosts = posts.sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
      setCardList(sortedPosts);
    } else {
      const sortedPosts = posts.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
      setCardList(sortedPosts);
    }
  };

  useEffect(() => {
    fetch("posts.json")
      .then((resp) => resp.json())
      .then((posts: CardProps[]) => {
        handlePostSorted(posts);
      });
  }, [handlePostSorted, selectValue]);

  return {
    cardList,
    handleCardClick,
    selectValue,
    handleSelect,
  };
}
