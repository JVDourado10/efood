import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RestaurantType } from "../pages/Home";

type PurchasePaylod = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string,
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type DataType = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<DataType, PurchasePaylod>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})


export const { useGetRestaurantsQuery, useGetItemQuery, usePurchaseMutation } = api

export default api