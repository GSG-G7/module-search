const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');


test('intial test', (t) => {
  const actual = 5;
  t.equal(actual, 5);
  t.end();
})


test('Testing for home route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      t.end();
    })
})