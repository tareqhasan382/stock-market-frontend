import baseApi from "../api/baseApi";

export interface StockData {
  id: string;
  trade_code: string;
  open: string;
  close: string;
  low: string;
  high: string;
  date: string;
  volume: number;
}

export const stockApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Read all stocks
    stocks: build.query<StockData[], void>({
      query: () => ({
        url: "stock",
        method: "GET",
      }),
      providesTags: ["stock"],
    }),
    // Read single stock by id
    stock: build.query<StockData, string>({
      query: (id) => ({
        url: `stock/${id}`,
        method: "GET",
      }),
      providesTags: ["stock"],
    }),
    // Create a new stock
    createStock: build.mutation<StockData, Partial<StockData>>({
      query: (newStock) => ({
        url: "stock",
        method: "POST",
        body: newStock,
      }),
      invalidatesTags: ["stock"],
    }),
    // Update stock
    updateStock: build.mutation<
      StockData,
      { id: string; stock: Partial<StockData> }
    >({
      query: ({ id, stock }) => ({
        url: `/stock/${id}`,
        method: "PATCH",
        body: stock,
      }),
      invalidatesTags: ["stock"],
    }),
    // Delete stock by id
    deleteStock: build.mutation<string, string>({
      query: (id) => ({
        url: `/stock/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["stock"],
    }),
  }),
});

export const {
  useStocksQuery,
  useStockQuery,
  useCreateStockMutation,
  useUpdateStockMutation,
  useDeleteStockMutation,
} = stockApi;
