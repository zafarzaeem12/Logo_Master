import { URL } from "./custom";

export const getApi = async (url) => {
  try {
    const response = await fetch(`${URL}${url}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return error.response.data;
  }
};
