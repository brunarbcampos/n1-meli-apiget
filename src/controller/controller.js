const tarefa = require("../model/tarefa.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(3000).send(tarefa)
}