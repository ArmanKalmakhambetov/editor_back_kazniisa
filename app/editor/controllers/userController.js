const User = require("../../auth/models/User");

async function getAllUsers(req, res) {
  try {
    const allUsers = await User.findAll();

    return res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAuthenticatedUserInfo(req, res) {
  try {
    const userId = req.user.id;

    // Находим пользователя по его идентификатору
    const user = await User.findByPk(userId);

    // Проверяем, найден ли пользователь
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateUserInfo(req, res) {
  try {
    const userId = req.user.id;

    // Обновляем информацию о пользователе по его идентификатору
    const [updatedRowCount] = await User.update(
      {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password, // Возможно, следует выполнить дополнительную обработку пароля, например, хэширование
      },
      {
        where: {
          id: userId,
        },
      }
    );

    // Проверяем, была ли обновлена информация о пользователе
    if (updatedRowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    // Получаем обновленную информацию о пользователе
    const updatedUser = await User.findByPk(userId);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.user.id;

    // Удаляем пользователя по его идентификатору
    const deletedRowCount = await User.destroy({
      where: {
        id: userId,
      },
    });

    // Проверяем, был ли удален пользователь
    if (deletedRowCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(204).send(); // Успешный ответ без содержимого
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getAllUsers,
  getAuthenticatedUserInfo,
  deleteUser,
  updateUserInfo,
};
