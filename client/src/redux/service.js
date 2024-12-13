import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMyInfo } from "./slice";

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

    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "post",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),

    myInfo: builder.query({
      query: () => ({
        url: "me",
        method: "GET",
      }),
      providesTags: ["Me"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addMyInfo(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useMyInfoQuery } =
  serviceApi;
