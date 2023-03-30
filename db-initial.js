db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [{ role: 'dbOwner', db: 'imak' }],
});

db.users.insert({
  name: 'user',
});
