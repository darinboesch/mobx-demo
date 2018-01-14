'use strict';

var _todoStore = require('./todo-store');

var _todoStore2 = _interopRequireDefault(_todoStore);

var _observableTodoStore = require('./observable-todo-store');

var _observableTodoStore2 = _interopRequireDefault(_observableTodoStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

///////////////////////////////////////////////////////////
// /*
// Test 1
// */
// const todoStore = new TodoStore();

// todoStore.addTodo("read MobX tutorial");
// console.log(todoStore.report());

// todoStore.addTodo("try MobX");
// console.log(todoStore.report());

// todoStore.todos[0].completed = true;
// console.log(todoStore.report());

// todoStore.todos[1].task = "try MobX in own project";
// console.log(todoStore.report());

// todoStore.todos[0].task = "grok MobX tutorial";
// console.log(todoStore.report());
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
/*
Test 2
*/
var observableTodoStore = new _observableTodoStore2.default();

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";
///////////////////////////////////////////////////////////