const ErrorApp = () => import("./ErrorApp");

export default [
  {
    path: "/not-authorized",
    name: "NotAuthorized",
    component: ErrorApp
  }
];
