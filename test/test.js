assert = require('assert');
change = require('../src/change.js');

describe('Cash Register', function(){
    describe('module change', function(){
        it('should have a getChangeMethod', function(){
            assert.equal(typeof change, 'object');
            assert.equal(typeof change.getChange, 'function');
        })
        it('getChange(210, 300) should return [50, 25, 10, 5]', function(){
            assert.deepEqual(change.getChange(210, 300), [50, 25, 10, 5]);
        })
        it('getChange(486, 1000) should return [500,10,2,2]', function(){
            assert.deepEqual(change.getChange(486, 1000), [500,10,2,2]);
        })
    })
})

