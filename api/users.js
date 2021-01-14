const nanoid = require('nanoid');

let users = [];

module.exports = {
	findAll() {
		return Promise.resolve(users);
	},

	findById(id) {
		const user = users.find((user) => user.id === id);
		return Promise.resolve(user);
	},

	create({ name, bio }) {
		const newUser = { id: nanoid.nanoid(4), name, bio };
		users.push(newUser);
		return Promise.resolve(newUser);
	},

	update({ id, changes }) {
		const user = users.find((user) => user.id === id);
		if (!user) return Promise.resolve(null);

		const updatedUser = { ...changes, id };
		users = users.map((user) => (user.id === id ? updatedUser : user));
		return Promise.resolve(users);
	},

	delete(id) {
		const user = users.find((user) => user.id === id);
		if (!user) return Promise.resolve(null);

		users = users.filter((user) => user.id !== id);
		return Promise.resolve(users);
	},
};
