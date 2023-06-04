const express = require("express")
const router = express.Router()

const erlang = require('erlang-c-js')

router.get('/', (req, res) => {
    res.send('Previous Erlang Results')
})

router.get('/new', (req, res) => {
    res.render("erlang/new")
})

router.post('/', (req, res) => {
    console.log(req.body)

    var volumes = req.body.volumes
    var intervalLength = req.body.intervalLength
    var aht = req.body.aht
    var targetServiceLevel = req.body.targetServiceLevel
    var targetTime = req.body.targetTime
    var maxOccupancy = req.body.maxOccupancy
    var shrinkage = req.body.shrinkage

    var result = erlang.getNumberOfAgents(volumes, intervalLength, aht, targetServiceLevel, targetTime, maxOccupancy, shrinkage)

    console.log(`RESULT: ${result}`)
    res.json({ "result" : result })
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get Erlang Calculation with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update Erlang Calculation with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete Erlang Calculation with ID ${req.params.id}`)
    })

module.exports = router