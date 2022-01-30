const express = require('express')
const port = 3000;


const app = express()
app.use(express.json())
app.get('/users', (request, response) => {

    console.log(request.body);

    return response.json({message: "ok"})
})

app.listen(port, () => {
    
    console.log(`Server started on port ${port}`)
})