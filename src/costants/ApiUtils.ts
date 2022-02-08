/*********************
 * Base url
 *********************/
export const BASE_URL = "http://localhost:8000/api/v1/";

/*********************
 * Types
 *********************/

// Enum for Api request method
export enum ApiMethod {
  GET = "GET",
  ADD = "POST",
  UPDATE = "PATCH",
  DELETE = "DELETE",
}

// Get Recipes interface
export interface IGetRecipesResponse {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  recipe_effect: RecipeEffect;
}

// Ingredient interface
export interface Ingredient {
  id: number;
  name: string;
  description: string;
  quantity: number;
}

// Recipe effect interface
export interface RecipeEffect {
  id?: number;
  type?: string;
  points?: string;
  duration?: number;
}

// Query paramiters
export interface IQueryParams {
  param: string;
  value: string;
}

// Custom Api request
export interface IRequestApiHandler {
  url: string;
  method: ApiMethod;
  urlParams?: number[];
  payload?: any;
  queryParams?: IQueryParams[];
}

/*********************
 * useFetch:
 * custom builders
 *********************/

// set custom url
export const customUrlParamsBuilder = (params?: number[]) => {
  const path = params?.map((param) => `/${param}`);

  return path?.join("") || "";
};

// Query params builder
export const QueryParamsBuilder = (params?: IQueryParams[]) => {
  // Extract params from array & create query string
  const path = params?.map((param: IQueryParams, i: number) =>
    i === 0
      ? `?${param.param}=${param.value}`
      : `&${param.param}=${param.value}`
  );

  // If path exist return query string
  return path?.join("") || "";
};
