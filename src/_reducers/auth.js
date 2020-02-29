const initState = {
  authenticated: false,
  user: null,
  loading: false,
  error: null
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "LOGIN_FULFILLED":
      // console.log("masuk login fullfil");
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    case "REGISTER_PENDING":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "REGISTER_FULFILLED":
      // console.log("masuk register fullfil");
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    case "LOGOUT":
      console.log("logout");
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default auth;
