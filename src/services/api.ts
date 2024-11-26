import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RestaurantType } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantType[], void>({
      query: () => 'restaurantes'
    }),
    getItem: builder.query<RestaurantType, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})


export const { useGetRestaurantsQuery, useGetItemQuery } = api

export default api