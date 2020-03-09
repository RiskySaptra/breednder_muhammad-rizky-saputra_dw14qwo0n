import { API, setAuthToken } from "../config/api";

export const getAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: "GET_AUTH",
      payload: async () => {
        setAuthToken(token);
        const res = await API.get("/autoauth");
        console.log("Move", res.data.data);

        return res.data.data;
      }
    };
  } else {
    ////redirect to login page
    // console.log("no token");
    return {
      type: "LOGOUT",
      payload: {}
    };
  }
};

export const login = data => {
  console.log("data action logins", data);
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
