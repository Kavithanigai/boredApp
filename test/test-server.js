'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../server');

// this lets us use *expect* style syntax in our tests
// so we can do things like `expect(1 + 1).to.equal(2);`
// http://chaijs.com/api/bdd/
const expect = chai.expect;

// This let's us make HTTP requests
// in our tests.
// see: https://github.com/chaijs/chai-http
chai.use(chaiHttp);

describe('Bored App basic test',function(){
  //let url="http://localhost:8080";
  it('should get 200 status code and html',function(){
     return chai.request(app)
     .get('/')
     .then(function(res){
        expect(res).to.have.status(200);
      });
  });
});
