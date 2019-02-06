import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import { connectRouter } from "connected-react-router";
import encryptor from "../utilities/encryptor";
import app from "./app";
import user from "./user";

const config = {
  blacklist: ["app"],
  key: "primary",
  storage,
  transforms: [encryptor]
};

export default history =>
  persistCombineReducers(config, {
    app,
    router: connectRouter(history),
    user
  });
