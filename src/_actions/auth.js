import { API, setAuthToken } from "../config/api";

export const login = data => {
  console.log("data action login", data);
  return {
    type: "LOGIN",
    payload: async () => {
      const res = await API.post("/login", data);
      console.log("Move", res.data.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);
      console.log(localStorage.getItem("userId"));

      return res.data.data;
    }
  };
};

export const register = data => {
  console.log("data action register", data);
  return {
    type: "REGISTER",
    payload: async () => {
      const res = await API.post("/register", data);
      console.log("Move", res.data.data);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("userId", res.data.data.id);
      return res.data.data;
    }
  };
};
