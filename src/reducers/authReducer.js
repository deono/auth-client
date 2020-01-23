const INITIAL_STATE = {
  authenticated: "",
  errorMessage: ""
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}
