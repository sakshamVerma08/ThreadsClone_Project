import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  keepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ["Post", "User", "Me"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "signUp",
        method: "POST",
        body: data,
      }),
      invalidateTags: ["Me"],
    }),
  }),
});

export const { useSignUpMutation } = serviceApi;
