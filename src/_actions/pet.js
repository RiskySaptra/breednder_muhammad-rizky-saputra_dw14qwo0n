import { API, setAuthToken } from "../config/api";
import { GET_PET } from "../config/constants";

// export const getPets = () => {
//   console.log("Get Pets ON");
//   return {
//     type: GET_PET,
//     payload: async () => {
//       const res = await API.get("/pets/id");
//       console.log("result Pets", res.data.data);
//       return res.data.data;
//     }
//   };
// };
export const getUserPets = () => {
  return {
    type: GET_PET,
    payload: async () => {
      const token = localStorage.getItem("token");
      setAuthToken(token);
      const res = await API.get("/pets/user");
      console.log("result UserPets Action", res.data.data);
      return res.data.data;
    }
  };
};
