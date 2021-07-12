import { TaskItem } from './models/taskItem';

export const tasks: TaskItem[] = [
	new TaskItem(1, 'Task One'),
	new TaskItem(2, 'Task Two'),
	new TaskItem(3, 'Task Three'),
	new TaskItem(4, 'Task Four', true),
];
