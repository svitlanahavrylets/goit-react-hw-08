export const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
