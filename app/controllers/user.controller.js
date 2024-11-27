const User = require('../models/user.model');
const Bootcamp = require('../models/bootcamp.model');

// Crear y guardar un nuevo usuario
const createUser = (userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.create(userData);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

// Obtener los Bootcamps de un usuario por su ID
const findUserById = (idUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findByPk(idUser, {
        include: {
          model: Bootcamp,
          as: "bootcamps", 
          attributes: ["id", "title"], 
        }, 
      });
      if (!user) {
        reject('Usuario no encontrado.');
      } else {
        resolve(user);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// Obtener todos los usuarios, incluyendo sus Bootcamps
const findAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await User.findAll({
        include: {
          model: Bootcamp,
          as: "bootcamps", 
          attributes: ["id", "title"], 
        }, 
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

// Actualizar un usuario por ID
const updateUserById = (idUser, userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [rowsUpdated] = await User.update(userData, { where: { id: idUser } });
      if (rowsUpdated === 0) {
        reject('Usuario no encontrado para actualizar.');
      } else {
        resolve(`Usuario con ID ${idUser} actualizado con éxito.`);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// Eliminar un usuario por ID
const deleteUserById = (idUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const rowsDeleted = await User.destroy({ where: { id: idUser } });
      if (rowsDeleted === 0) {
        reject('Usuario no encontrado para eliminar.');
      } else {
        resolve(`Usuario con ID ${idUser} eliminado con éxito.`);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createUser, findUserById, findAll, updateUserById, deleteUserById };
