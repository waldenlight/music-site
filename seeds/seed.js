const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: 1,
    });
  }

  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     user_id: 1,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
