const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    // let courseCheck = await connection.db.listCollections({ name: 'courses' }).toArray();
    // if (courseCheck.length) {
    //   await connection.dropCollection('courses');
    // }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    // const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    // const last = fullName.split(' ')[1];
    const email = `${first}@gmail.com`;

    users.push({
      fullName,
      email,
      // github,
      // assignments,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  //  await Course.collection.insertOne({
  //   courseName: 'UCLA',
  //   inPerson: false,
  //   students: [...users],
  // });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
