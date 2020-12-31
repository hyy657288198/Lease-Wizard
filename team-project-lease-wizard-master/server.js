const log = console.log
const express = require('express')
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());


//path constant
const jsonPath = __dirname + '/db/json/'
const pdfPath = __dirname + '/db/pdf/'
const javaPath = "java -jar ExportToPDF.jar "

// counter
let fileID = 1


// express routes
// POST
app.post('/pdf', (req, res) => {
	const fileName = jsonPath + fileID + '.json'
	fs.writeFileSync(fileName, JSON.stringify(req.body))
	res.send({fileId: fileID.toString()})
	fileID++
})

// GET /generate/
app.get("/pdf/:id", (req, res) => {
	// check if the given id is valid
	const id = req.params.id
	if (id >= fileID) {
		res.status(400).send()
		return
	}

	// export process
	let exec = require('child_process').exec, child;
	const execPath = javaPath + id

	child = exec(execPath, function (error, stdout, stderr) {
		log(stdout)
		if (stderr !== "") {
			res.status(500).send(stderr)
			return
		}
		res.send(id.toString())
	});
})

app.get("/pdf/:id/view", (req, res) => {
	// check if the given id is valid
	const id = req.params.id
	if (id >= fileID) {
		res.status(400).send()
		return
	}
	const fileName = pdfPath + 'OntarioLeaseForm.pdf'
	res.sendFile(fileName)
})

app.get("/pdf/:id/download", (req, res) => {
	// check if the given id is valid
	const id = req.params.id
	if (id >= fileID) {
		res.status(400).send()
		return
	}
	const fileName = pdfPath + 'OntarioLeaseForm.pdf'
	res.download(fileName)
})


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/Client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/Client/build/index.html");
});

// will use process.env.PORT for deployment.
const port = process.env.PORT || 3000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
	log(`Please go to http://localhost:${port}`)
})  
