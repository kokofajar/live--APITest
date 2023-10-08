const request = require('supertest')
const baseUrl = require('../../env')

describe('post request contoh', () => {
    it ("create new user", async () =>{
        const response = request(baseUrl())
        .post('/users')
        .send ({
            
                "name": "koko",
                "job": "QA"
            
        })


        console.log((await response).status)
        console.log((await response).body)
    })

})