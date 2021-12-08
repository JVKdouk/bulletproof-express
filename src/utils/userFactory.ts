import faker from 'faker';

const generateFakeUserData = () => ({
  name: faker.name.findName(),
  password: faker.internet.password()
});

export default generateFakeUserData;