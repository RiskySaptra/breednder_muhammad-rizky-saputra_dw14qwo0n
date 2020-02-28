import { API } from "../config/api";
import { GET_SPECIES } from "../config/constants";

export const getSpecies = () => {
  return {
    type: GET_SPECIES,
    payload: async () => {
      const res = await API.get("/species");
      // console.log("result Species", res.data.data);
      return res.data.data;
    }
  };
};