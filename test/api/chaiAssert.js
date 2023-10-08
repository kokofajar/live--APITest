const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post contoh request', () => {
    const response = request(baseUrl())
    .post('/users')
    .send (DATA.CREATE_USER_DATA)

    it('response status equal to 201', async () => {
       //check response status harus 201
       expect((await response).status).to.equal(201)
    })
    it('response body to haveOwnProperty', async () => { 
        //expect dalam body ada value "name"
        expect((await response).body).to.haveOwnProperty('name')

    })

    //Reporting with Mocha

})