import app from '@/app';
import database from '@/database';
import supertest from 'supertest';
import generateFakeUserData from '@/utils/userFactory';

const request = supertest(app);

describe('Create user', () => {
  beforeAll(async () => {
    await database.user.deleteMany();
  });

  it('should create a user', async () => {
    const userData = generateFakeUserData();
    await request.post('/users').send(userData);

    const users = await database.user.findMany();

    expect(users.length).toBe(1);
  });
});

describe('Upload user profile image', () => {
  beforeAll(async () => {
    await database.user.deleteMany();
  });

  const filePath = __dirname + '/assets/placeholder.png';

  it('should upload image', async () => {
    const userData = generateFakeUserData();
    const user = await database.user.create({ data: userData });

    const response = await request
      .post(`/users/${user.id}/image`)
      .attach('image', filePath);

    expect(response.statusCode).toBe(200);
  });
});
