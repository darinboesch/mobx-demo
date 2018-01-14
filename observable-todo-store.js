import * as mobx from 'mobx';
import {
	observable,
	computed
} from 'mobx';

export default class ObservableTodoStore {
	// @observable - marks the value to with MobX to say that these can change over time
	@observable todos = [];
	@observable pendingRequests = 0;

	constructor() {
		mobx.autorun(() => console.log(this.report));
	}

	// @computed - means that these can be derived from state
	@computed get completedTodosCount() {
		return this.todos.filter(
			todo => todo.completed === true
		).length;
	}

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}