import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API}/${process.env.NEXT_PUBLIC_CONTEXT_API}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': '' }
});

export const doGet = async (url: string, params?: any) => {
  const response = await instance.get(url, { params: params })
  return response?.data
}
