assert = require('assert');

describe('Array', function(){
    it('should return -1 when value is not present', function(){
        assert.equal(-1, [1,2,4].indexOf(3));
    })
})