const User = require("../models/user.model.js"); // Modelo del usuario
const Bootcamp = require("../models/bootcamp.model.js"); // Modelo del bootcamp
const conexion = require("../config/db.config.js"); // Configuración de la conexión a la BD

// Relación muchos a muchos: Un usuario puede estar en varios Bootcamps y viceversa
User.belongsToMany(Bootcamp, {
    through: "bootcamps_users", // Nombre de la tabla intermedia
    as: "bootcamps",           // Alias para acceder a los Bootcamps desde un Usuario
    foreignKey: "user_id",     // Clave foránea en la tabla intermedia para el Usuario
});

Bootcamp.belongsToMany(User, {
    through: "bootcamps_users", // Nombre de la tabla intermedia
    as: "users",               // Alias para acceder a los Usuarios desde un Bootcamp
    foreignKey: "bootcamp_id", // Clave foránea en la tabla intermedia para el Bootcamp
});

// Exportamos los modelos y la conexión
module.exports = { Bootcamp, User, conexion };
