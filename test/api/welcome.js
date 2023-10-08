const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//Cara menggunakan Asserting
describe('welcome test', function(){
    it('app should return welcome msg',function(){
        assert.equal(app(),"welcome")
    })

})