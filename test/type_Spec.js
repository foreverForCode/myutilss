
import type from './../src/type'

import should from 'should';

describe('测试type', function(){

	it('{} should be is object', function(){

		type.isObject({}).should.be.equal(true);
	})

	it('[] should be is array', function () {

		type.isArray([]).should.be.equal(true);
	})

	it('function should be is function', function(){

		var f = function(){};

		type.isFunction(f).should.be.equal(true);
	})

	it('undefine should be is undefine', function(){

		type.isUndefined(undefined).should.be.equal(true);
	})
})

