const request = require('supertest')
const baseUrl = require('../../env')

describe('Get request contoh', () => {
    it ("find user by id", async () =>{
        const response = request(baseUrl())
        .get('/users?page=2')

        console.log((await response).status)
        console.log((await response).body)
    })

})