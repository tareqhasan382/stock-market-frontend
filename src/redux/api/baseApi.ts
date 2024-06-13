import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BASEURL = "https://django-backend-project.vercel.app/";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  endpoints: () => ({}),
  tagTypes: ["stock", "auth"],
});

export default baseApi;
