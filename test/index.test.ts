import request from 'supertest';
import app from '../src/app'

// TEST /blog API
describe('TEST /blog', ()=> {
   // blog id
  let blogId:any = null
  // send data
  let params = {
    title:  `${Date.now()} Jest test create data ${blogId}`,
    author: 'jest',
    body:   'jest test data',
    comments: [
      { body: 'test', date: Date.now() }
    ],
    hidden: true,
    meta: {
      votes: 1,
      favs:  1
    }
  }
  // create blog
  it('create blog should return 200', (done) => {
    request(app)
      .post('/blog')
      .send(params)
      .expect(200,)
      .end((err, res) => {
        if (err) return done(err)
        blogId = res.body['_id']
        done()
      })
  });

  // find all blog
  it('find all blog should return 200', (done) => {
    request(app)
      .get('/blog')
      .expect(200, done)
  });

  // find one blog
  it('find one blog should return 200', (done) => {
    if (!blogId) return done('no blogId')
    request(app)
      .get(`/blog/${blogId}`)
      .expect(200, done)
  });

  // update blog
  it('update blog should return 200', (done) => {
    if (!blogId) return done('no blogId')
    request(app)
      .put(`/blog/${blogId}`)
      .send(params)
      .expect(200, done)
  });

  // delete blog
  it('deleta blog should return 200', (done) => {
    if (!blogId) return done('no blogId')
    request(app)
      .delete(`/blog/${blogId}`)
      .expect(200, done)
  });

});

// TEST 404 API
describe('GET /404', ()=> {
  it('404 should return 404', (done) => {
    request(app)
      .get('/404')
      .expect(404, done)
  });
});

