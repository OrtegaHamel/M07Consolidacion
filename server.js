const { User, Bootcamp, conexion } = require('./app/models/index.js'); 
const { createUser, findUserById, findAll, updateUserById, deleteUserById } = require("./app/controllers/user.controller.js");
const { createBootcamp, addUser, findById, findAllBootcamp } = require("./app/controllers/bootcamp.controller.js");


(async () => {
  try {
    await conexion.sync({ force: true });
    console.log('Conexión correcta');


    // Crear usuarios
    const user1 =  await createUser({ firstName: "Mateo",lastName: "Díaz ", email:"mateo.diaz@correo.com"});
    const user2 =   await createUser({ firstName: "Santiago",lastName: "Mejias ", email:"santiago.mejias@correo.com"});
    const user3 =   await createUser({ firstName: "Lucas",lastName: "Rojas ", email:"lucas.rojas@correo.com"});
    const user4 =  await createUser({ firstName: "Facundo",lastName: "Fernandez ", email:"facundo.fernandez@correo.com"});

    // Crear Bootcamps
    try {
      const bootcamp1 = await createBootcamp({
        title: "Introduciendo El Bootcamp De React.",
        cue: 10,
        description: "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
      });
      console.log('Bootcamp creado:', bootcamp1.toJSON());
    } catch (error) {
      console.error('Error al crear Bootcamp 1:', error.message);
    }

    try {
      const bootcamp2 = await createBootcamp({
        title: "Bootcamp Desarrollo Web Full Stack.",
        cue: 12,
        description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
      });
      console.log('Bootcamp creado:', bootcamp2.toJSON());
    } catch (error) {
      console.error('Error al crear Bootcamp 2:', error.message);
    }

    try {
      const bootcamp3 = await createBootcamp({
        title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
        cue: 18,
        description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados.",
      });
      console.log('Bootcamp creado:', bootcamp3.toJSON());
    } catch (error) {
      console.error('Error al crear Bootcamp 3:', error.message);
    }
    // Asignar usuarios a Bootcamps
    await addUser(1,1);
    await addUser(1,2);
    await addUser(2,1);
    await addUser(3,1);
    await addUser(3,2);
    await addUser(3,3);


    // Consultar el Bootcamp por id, incluyendo los usuarios.
    const bootcampById = await findById(1);
    console.log(JSON.stringify(bootcampById,null,2));

    // Listar todos los Bootcamp con sus usuarios
    const listBootcamp = await findAllBootcamp();
    console.log(JSON.stringify(listBootcamp, null,2));

    // Consultar un usuario por id
    const userById = await findUserById(3);
    console.log(JSON.stringify(userById, null,2));

    // Listar usuarios con sus Bootcamp
    const listUsers = await findAll(); 
    console.log(JSON.stringify(listUsers,null,2));

    // Actualizar usuario
    await updateUserById(3,{lastName:"Gutiérrez"});
   
   // Eliminar usuario por id
    await deleteUserById(1);

   


    

  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message);
  }
})();

