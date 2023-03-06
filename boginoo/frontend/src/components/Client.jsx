import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Client = () => {
  const { id } = useParams();

  useEffect(() => {
    const GoLink = async () => {
      if (id) {
        try {
          const { data } = await axios.get(
            `https://boginoo-backend.onrender.com/link/${id}`
          );
          window.location.href = data[0].original;
        } catch (error) {
          console.log(error);
        }
      }
    };
    GoLink();
  }, [id]);
  return <></>;
};
