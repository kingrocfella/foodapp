import { useEffect, useState } from "react";
import Yelp from "../api/yelp";

export default () => {
  const [error, handleError] = useState("");
  const [response, handleResponse] = useState([]);

  const handleSubmit = async (term = "pasta") => {
    try {
      const {
        data: { businesses },
      } = await Yelp.get("/search", {
        params: {
          term,
          limit: 50,
          location: "new york",
        },
      });
      handleError("");
      handleResponse(businesses);
    } catch (err) {
      handleError("Something went wrong..");
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return [error, response, handleSubmit];
};
