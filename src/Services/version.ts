import axios from "axios";
import * as API from "./constant";
type Data = {
  isError: boolean;
  data: any;
  errorMessage: string;
};
export const getVersion = async () => {
  const response: Data = { isError: false, data: [], errorMessage: "" };
  await axios({
    method: "get",
    url: API.VERSION,
  })
    .then((res) => {
      response.data = res.data;
    })
    .catch((error) => {
      response.isError = true;
      response.errorMessage = error;
    });
  return response;
};
