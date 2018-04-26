const redis = require('redis')
const {expect} = require('chai')
const requests = require('superagent')

const redisClient = redis.createClient('mordor')

describe('some other thing', function() {
    it('should behave', async function() {
        await requests('http://google.com/')
        expect(true).to.be.eq(true)
    })
})