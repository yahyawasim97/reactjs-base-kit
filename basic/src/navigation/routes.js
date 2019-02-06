import Landing from "../containers/landing";
import NotFound from "../containers/not-found";

const Routes = [
  {
    component: Landing,
    path: "/",
    title: "ReactJS-base-kit",
    type: "public"
  },
  // Not Found must be last in array.
  {
    component: NotFound,
    path: "*",
    title: "Not Found",
    type: "public"
  }
];

export default Routes;
