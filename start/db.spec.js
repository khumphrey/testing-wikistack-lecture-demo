const expect = require('chai').expect
const { Hippo } = require('./db')

describe('Hippo model tests', function () {
	before(function (done) {
		Hippo.sync({force: true})
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
		describe('find plumpest', function () {
			it('takes no arguments and returns an array', function () {
				Hippo.findPlumpest()
					.then(foundHippos => {
						expect(foundHippos).to.be.a('array')
						
					})
			})
		})
	})
})