import { Middleware } from "redux";
/*
import { addTodo } from "./addTodo";
import { deleteTodo } from "./deleteTodo";
import { fetchAllTodo } from "./fechAllTodo";
import { fetchTodoById } from "./fetchTodoById";
import { updateTodo } from "./updateTodo";
*/
import { Api } from "src/api";
/*
const middleware: ((api: Api) => Middleware)[] = [
  addTodo,
  deleteTodo,
  fetchAllTodo,
  fetchTodoById,
  updateTodo
];
*/
const middleware: ((api: Api) => Middleware)[] = [

];
export default middleware;
export * as apiActions from "./actions";
