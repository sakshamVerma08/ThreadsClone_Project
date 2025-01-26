import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addMyInfo, addToAllPosts, deleteThePost } from "./slice";

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
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Me"],
    }),

    myInfo: builder.query({
      query: () => ({
        url: "myinfo",
        method: "GET",
      }),
      providesTags: ["Me"],
      // pessimistic updating
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addMyInfo(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),

    // The Logout functioning is not working.
    logoutMe: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),

      invalidatesTags: ["Me"],
    }),

    userDetails: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "User", id }],
      // Pessimistic Update
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addUser(data));
        } catch (err) {
          console.log("err:", err);
        }
      },

      // async onQueryStarted(params, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //   } catch (err) {
      //     console.log("Err:", err);
      //   }
      // },
    }),

    searchUsers: builder.query({
      query: (query) => ({
        url: `users/search/${query}`,
        method: "GET",
      }),
    }),

    followUser: builder.mutation({
      query: (id) => ({
        url: `user/follow/${id}`,
        method: "PUT",
      }),

      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    // GETS THE INFORMATION OF ALL POSTS
    allPosts: builder.query({
      query: (page) => ({
        url: `post?page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, args) => {
        return result
          ? [
              ...result.posts.map(({ _id }) => ({ type: "Post", id: _id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }];
      },
      // Pessimistic Update
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addToAllPosts(data));
        } catch (err) {
          console.log("err:", err);
        }
      },
    }),

    addPosts: builder.query({
      query: (data) => ({
        url: `post`,
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Post"],
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addSingle(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(params, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(deleteThePost(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),

    likePost: builder.mutation({
      query: (id) => ({
        url: `post/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),

    // GETS THE INFORMATION OF A SINGLE POST
    singlePost: builder.query({
      query: (id) => ({
        url: `post/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "Post", id }],
    }),

    repost: builder.mutation({
      query: (id) => ({
        url: `repost/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User"],
    }),

    addComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    deleteComment: builder.mutation({
      query: ({ postId, id }) => ({
        url: `comment/${postId}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { postId }) => [
        { type: "Post", id: postId },
      ],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: `update`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useMyInfoQuery,
  useLogoutMeMutation,
  useUserDetailsQuery,
  useSearchUsersQuery,
  useFollowUserMutation,
  useAllPostsQuery,
  useAddPostsQuery,
  useDeletePostMutation,
  useLikePostMutation,
  useSinglePostQuery,
  useRepostMutation,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useUpdateProfileMutation,
} = serviceApi;
