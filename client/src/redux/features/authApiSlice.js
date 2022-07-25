import { apiSlice } from "../../app/apis/apisSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credencials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credencials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
