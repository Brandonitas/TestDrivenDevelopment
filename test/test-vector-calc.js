const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('Vector calculator', ()=>{
    describe('#sum', ()=>{
      let v1 = {x: 4, y: 3};
      let v2 = {x: 1, y: 3};
      
      it('should sum the vectors', ()=>{
        assert.deepEqual({x: 5, y: 6}, VectorCalculator.sum(v1, v2));
      })
    })


    describe('#substract', ()=>{
      let v1 = {x: 4, y: 3};
      let v2 = {x: 1, y: 3};
      
      it('should substract the vectors', ()=>{
        assert.deepEqual({x: 3, y: 0}, VectorCalculator.sub(v1, v2));
      })
    })

    describe('#scalar', ()=>{
      let v1 = {x: 4, y: 3};
      let x = 5;
      
      it('should scalar the vectors', ()=>{
        assert.deepEqual({x: 20, y: 15}, VectorCalculator.scalar(v1, v2));
      })
    })

    describe('#dot', ()=>{
      let v1 = {x: 4, y: 3};
      let v2 = {x: 1, y: 3};
      
      it('should scalar the vectors', ()=>{
        assert.deepEqual({x: 20, y: 15}, VectorCalculator.dot(v1, v2));
      })
    })


});