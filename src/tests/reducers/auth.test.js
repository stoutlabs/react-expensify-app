import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const uid = "123abc";
  const action = {
    type: "LOGIN",
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "bbb222" }, action);
  expect(state).toEqual({});
});
