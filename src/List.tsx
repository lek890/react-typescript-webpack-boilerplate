import React from "react";
import { useQuery } from "react-query";

export default function List() {
  const { isLoading, error, data } = useQuery("some-cat-facts", () =>
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
    )
      .then((res) => res.json())
      .catch((err) => ({ err: err }))
  );

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>{"An error has occurred: " + error}</div>;

  return (
    <div>
      {data.map((fact) => (
        <div key={fact._id} style={{ padding: "1%" }}>
          {fact.text}
        </div>
      ))}
    </div>
  );
}
