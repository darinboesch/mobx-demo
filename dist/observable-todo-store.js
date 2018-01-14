'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = require('mobx');

var mobx = _interopRequireWildcard(_mobx);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ObservableTodoStore = (_class = function () {
	function ObservableTodoStore() {
		var _this = this;

		_classCallCheck(this, ObservableTodoStore);

		_initDefineProp(this, 'todos', _descriptor, this);

		_initDefineProp(this, 'pendingRequests', _descriptor2, this);

		mobx.autorun(function () {
			return console.log(_this.report);
		});
	}

	// @computed - means that these can be derived from state


	_createClass(ObservableTodoStore, [{
		key: 'addTodo',
		value: function addTodo(task) {
			this.todos.push({
				task: task,
				completed: false,
				assignee: null
			});
		}
	}, {
		key: 'completedTodosCount',
		get: function get() {
			return this.todos.filter(function (todo) {
				return todo.completed === true;
			}).length;
		}
	}, {
		key: 'report',
		get: function get() {
			if (this.todos.length === 0) return "<none>";
			return 'Next todo: "' + this.todos[0].task + '". ' + ('Progress: ' + this.completedTodosCount + '/' + this.todos.length);
		}
	}]);

	return ObservableTodoStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todos', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pendingRequests', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return 0;
	}
}), _applyDecoratedDescriptor(_class.prototype, 'completedTodosCount', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'completedTodosCount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'report', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'report'), _class.prototype)), _class);
exports.default = ObservableTodoStore;