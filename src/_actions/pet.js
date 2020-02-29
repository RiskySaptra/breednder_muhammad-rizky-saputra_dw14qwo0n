import { API,setAuthToken } from "../config/api";
import { GET_PET } from "../config/constants";

export const getPets = () => {
  console.log("Get Pets ON");
  return {
    type: GET_PET,
    payload: async () => {
      const res = await API.get("/pets/id");
      console.log("result Pets", res.data.data);
      return res.data.data;
    }
  };
};
export const getUserPets = () => {
  const token = localStorage.getItem("userId");
  console.log("id user loggin",token);
  
  console.log("Get UserPets ON");
  return {
    type: GET_PET,
    payload: async () => {
      const res = await API.get("/pets/user/" + token);
      console.log("result UserPets Action", res.data.data);
      return res.data.data;
    }
  };
};