const express = require('express'),
    port = process.env.port || 8080,
    app = express()

app.get('/', (req, res) => res.json({key: "value"}))

app.listen(port, () => console.log(`Server start at ${port}`))
