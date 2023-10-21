import express, { json } from 'express';
import { userRouter } from './routes/user-router';
import { stockRouter } from './routes/stock-router';

//const PORT = process.env.PORT ?? 45000;
const PORT = 45000;
const app = express();

console.log(PORT);
//console.log(process.env.ENVIRONMENT);

// console.log(process.env.PORT);
// console.log(process.env.ENVIRONMENT);

// ------------------ MIDDLEWARES ------------------ //

// Usamos el middleware json() que forma parte de Express, el cual permite convertir los cuerpos de las solicitudes a formato JSON.
app.use(json());

// ------------------ ROUTERS ------------------ //

// Es necesario que /api/user esté primero que /api, sino todas las solicitudes que se hagan a /api/users las maneja /api.
app.use('/api/users', userRouter);
app.use('/api/stock', stockRouter);

// Siempre es una buena práctica el configurar un endpoint para obtener el estado e info general del servidor.
app.get('/api', (req, res) => {
	res.status(200).json({
		name: 'RESTful API for user management',
		version: '1.0.0',
		running: true,
	});
});

// ------------------ SERVER ------------------ //

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
















// import express, { json } from 'express';
// import { userRouter } from './routes/user-router';

// const PORT = process.env.PORT ?? 45000;
// const app = express();

// // -------- MIDDLEWARES ------------//
// app.use(json());

// console.log(process.env.PORT);
// console.log(process.env.ENVIRONMENT);


// app.get('/ping', (req,res) => {
//     res.json({
//         pong:'Server running',
//         environment: process.env.ENVIRONMENT,
//     });
// });

// app.use('*', (req,res) => {
//     res.status(404).json({
//         error:  'Resource not found'
//     });
// });

// app.listen(PORT, () => {
//     console.log('Server listening on',PORT);
// });