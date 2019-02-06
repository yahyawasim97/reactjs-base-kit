/* eslint-disable */
import firebase from "firebase/app";
import "firebase/app";
import "firebase/messaging";
import { setDeviceToken } from "./actions/user-actions-types";

const config = {};

firebase.initializeApp(config);

export const initializePushNotifications = async store => {
  const messaging = firebase.messaging();

  messaging
    .requestPermission()
    .then(async () => {
      const token = await messaging.getToken();

      store.dispatch(setDeviceToken(token));

      return token;
    })
    .then(token => {
      store.dispatch(setDeviceToken(token));
    })
    .catch(error => {
      if (error.code === "messaging/permission-blocked") {
        // console.log('Please Unblock Notification Request  Manually');
      } else {
        console.log("Error Occurred", error); //eslint-disable-line
      }
    });

  messaging.onTokenRefresh(token => {
    store.dispatch(setDeviceToken(token));
  });

  messaging.onMessage(() => {
    // this is the function that gets triggered when you receive a
    // push notification while you’re on the page. So you can
    // create a corresponding UI for you to have the push
    // notification handled.
  });
};
