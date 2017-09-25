const app = require('express')();
const { db, Hippo } = require('./model')
const port = 1337;

app.listen(port, err => {
	if (err) console.error(err)
	else console.log(`shiverrring on port: ${port}`)
})

app.get('/hippo', (req, res, next) => {
	Hippo.findAll()
		.then(foundHippos => res.json(foundHippos))
		.catch(next)
})

app.post('/hippo', (req, res, next) => {
	Hippo.create(req.body)
		.then(createdHippo => res.status(201).json(createdHippo))
		.catch(next)
})	

app.use((err, req, res, next) => {
	console.error(err)
	res.status(err.status || 500).send(err.message || 'Internal Error')
})
