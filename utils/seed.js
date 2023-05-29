const connection = require('../config/connection');
const { Course, Student } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

 
  await Course.deleteMany({});

  
  await User.deleteMany({});

  
  const user = [];

  
  for (let i = 0; i < 20; i++) {
    
    const thoughts = getRandomThoughts(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      first,
      last,
      thoughts
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertOne({
    thought: 'thought',
    user: [...users]
  });

  console.table(users);
  console.info('Seeding complete!');
  process.exit(0);
});
