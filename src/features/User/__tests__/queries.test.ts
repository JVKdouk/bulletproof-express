import app from '@/app';
import database from '@/database';
import supertest from 'supertest';
import generateFakeUserData from '@/utils/userFactory';

const request = supertest(app);

describe('Get users', () => {
  beforeAll(async () => {
    await database.user.deleteMany();
  });

  it('should be empty if no users', async () => {
    const response = await request.get('/users');
    console.log(response.body);
    expect(response.body.length).toBe(0);
  });

  it('should have length one if one user', async () => {
    const userData = generateFakeUserData();
    await database.user.create({ data: userData });

    const response = await request.get('/users');
    
    expect(response.body.length).toBe(1);
  });
});
