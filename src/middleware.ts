import { Middleware } from "redux";
import { Api } from "./api";
// import { middleware as todoMiddleware } from "./app/todo";

const middleware: ((api: Api) => Middleware)[] = [
  /* ...todoMiddleware */
];

export default middleware;
