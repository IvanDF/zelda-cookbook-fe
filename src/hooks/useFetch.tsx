import { useState } from "react";
import {
  ApiMethod,
  BASE_URL,
  customUrlParamsBuilder,
  IRequestApiHandler,
  QueryParamsBuilder,
} from "../costants/ApiUtils";

const useFetch = () => {
  // Initialize API response
  const [response, setResponse] = useState<any>({
    status: "pending",
    data: "",
  });

  // Set custom request settings
  const apiMode = (method: ApiMethod, payload: any) => {
    let mode: RequestInit = {
      method: method,
      mode: "cors", // For localhost only
      headers: {
        "Content-Type": "application/json",
      },
      body:
        // Set JSON payload if method match
        method === "PATCH" || method === "POST"
          ? JSON.stringify(payload)
          : null,
    };
    return mode;
  };

  // handler for lauch api request with patameters
  const requestApiHandler: (
    payload: IRequestApiHandler
  ) => Promise<any> = async ({
    url,
    method,
    urlParams,
    payload,
    queryParams,
  }) => {
    // Set full url path with params
    const urlBuilder =
      BASE_URL +
      url +
      customUrlParamsBuilder(urlParams) +
      QueryParamsBuilder(queryParams);

    // Fetching resource from url with custom parameters
    const apiResponse = await fetch(urlBuilder, apiMode(method, payload)).then(
      (response) => {
        // Checking reqeust status
        return !response.ok
          ? {
              status: "rejected",
              data: null,
            }
          : response.json();
      }
    );

    // Return response based on status
    apiResponse.status === "rejected"
      ? setResponse(apiResponse)
      : setResponse({
          status: "fulfilled",
          data: apiResponse,
        });
  };

  return { response, requestApiHandler };
};

export default useFetch;
