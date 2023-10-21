import users from '../database/users.json';
import { writeFile } from 'jsonfile';
import { randomUUID } from 'node:crypto';

abstract class UserModel {
	// Como realizamos las tareas de buscar un usuario y de guardar en la base de datos varias veces, separamos la lógica en métodos privados aparte. Privados para que sólo sean accesibles dentro del contexto de esta clase UserModel y no desde el exterior, ya que no es necesario.

	private static findUser(username: string) {
		return users.find((user) => user.username === username);
	}

	private static async writeDB() {
		return writeFile('./src/database/users.json', users);
	}

	static async checkToken(token: string) {
		return users.find((user) => user.token === token);
	}

	static async login(userData: any) {
		const { username, password } = userData;

		const userFound = this.findUser(username);

		// Si no encuentra un user, devolvemos un 404 (recurso no encontrado)
		if (!userFound) return 404;

		// Si el password no coincide con la almacenada en la BBDD, devolvemos un 400 (solicitud mal)
		if (userFound.password !== password) return 400;

		// Si encontró al usuario y los datos coinciden, entonces el logueo fue exitoso.
		// Para poder mejorar nuestro sistema de logueo, al loguearnos vamos a generar un token.
		// Así, vamos a solicitar ese token cada vez que se soliciten datos a los endpoints.
		const token = randomUUID();

		// Una vez generado el token, lo asociamos con el usuario y guardamos la base de datos.
		userFound.token = token;
		this.writeDB();

		return token;
	}

	static async logout(userData: any) {
		const { username } = userData;
		const user = this.findUser(username);

		if (!user) return 400;
		user.token = '';

		// Llama al método writeDB para guardar los cambios en la base de datos
		await this.writeDB();

		return 200;
	}

	static async createUser(data: any) {
		const { username, email, password } = data;

		const userExists = this.findUser(username);
		if (userExists) return 400;

		const newUser = { username, email, password, token: '' };
		users.push(newUser);

		await this.writeDB();

		// En el caso de operación exitosa, sólo quiero devolver estos datos
		return { username, email };
	}

	static async getAll() {
		return users;
	}

	static async update(data: any) {
		// Este endpoint es para actualizar los datos de usuarios.
		// AL usuario lo buscamos según su username, que es su ID único.

		const { username, email, password } = data;

		const userFound = this.findUser(username);

		if (!userFound) return 404;

		// Según la data que hayan enviado a la request, modificamos lo correspondiente.
		if (username) userFound.username = username;
		if (email) userFound.email = email;
		if (password) userFound.password = password;

		await this.writeDB();

		return userFound;
	}

	static async delete(username: string) {
		// Usamos el método de Array findIndex para encontrar el índice del elemento usuario.
		// Si existe, lo eliminamos...

		const userFoundIndex = users.findIndex(
			(user) => user.username === username
		);

		if (userFoundIndex === -1) return 404;

		const userDeleted = users[userFoundIndex];
		users.splice(userFoundIndex, 1);

		await this.writeDB();

		return userDeleted;
	}
}

export default UserModel;