const expect = require('chai').expect
const { Hippo } = require('./db')
const sinon = require('sinon')

// talk about it and show it passing without assert clause -- needs error thrown to know it shouldn't pass


describe('Hippo model tests', function () {
	before(function (done) {
		// consider just `return` statement
		Hippo.sync({force: true})
			// .then(()=>console.log('heyyyy'))
			.then(() => done())
			.catch(done)
	})

	describe('instance methods', function () {
		describe('move', function () {
			it('takes no arguments and returns a string', function () {
				const hippy = Hippo.build({})
				const moveWords = hippy.move();
				expect(moveWords).to.be.a('string');
			})
			it('will move based on sleepy factor', function () {
				const awakeHippo = Hippo.build({sleepyFactor: .1})
				const sleepyHippo = Hippo.build({sleepyFactor: .9})
				const awakeResult = awakeHippo.move();
				const sleepyResult = sleepyHippo.move();

				expect(awakeResult).to.equal("I should get going")
				expect(sleepyResult).to.equal("Maybe tomorrow")
			})
		})
	})

	describe('class methods', function () {
		describe('find plumpest', function (done) {
			it('takes no arguments and returns an array', function () {
				Hippo.findPlumpest()
					.then(foundHippos => {
						expect(foundHippos).to.be.a('array')
						done()
					})
					.catch(done)
			})
		})
	})
})