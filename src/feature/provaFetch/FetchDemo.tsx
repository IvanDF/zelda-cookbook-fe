import React, { useEffect } from "react";
import { ApiMethod } from "../../costants/ApiUtils";
import useFetch from "../../hooks/useFetch";

const FetchDemo: React.FC = () => {
  const { response, requestApiHandler } = useFetch();

  useEffect(() => {
    response.status !== "pending" && console.log(response);
  }, [response]);

  return (
    <>
      <button
        onClick={() =>
          requestApiHandler({ url: "recipes", method: ApiMethod.GET })
        }
      >
        Ottieni Ricette
      </button>
      <button
        onClick={() =>
          requestApiHandler({
            url: "recipe",
            method: ApiMethod.ADD,
            body: {
              name: "Nuova ricetta da React",
              description: "Nuova descrizione della ricetta da React",
              stat_id: 4,
              ingredient_ids: [1, 2, 1, 2],
            },
          })
        }
      >
        Crea Ricetta
      </button>
      <button
        onClick={() =>
          requestApiHandler({
            url: "recipe",
            urlParams: [1],
            method: ApiMethod.UPDATE,
            body: {
              name: "Nuova ricetta aggiornata da React",
              description:
                "Nuova descrizione della ricetta aggiornata da React",
              stat_id: 3,
              ingredient_ids: [1, 2, 1, 2, 2, 4],
            },
          })
        }
      >
        Aggiorna Ricetta
      </button>
    </>
  );
};

export default FetchDemo;
