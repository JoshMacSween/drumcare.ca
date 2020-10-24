const express = require('express')
const inquiries = require('./inquiryData')

const app = express()

app.get('/', (req, res) => {
  res.send('API is running ')
})

app.get('/inquiry', (req, res) => {
  res.send(inquiries)
})

app.get('/inquiry/:id', (req, res) => {
  const inquiry = inquiries.find((i) => i._id === Number(req.params.id))
  res.json(inquiry)
})

app.post('/inquiry', (req, res) => {
  res.send('Inquiry Posted!')
  console.log("Posted!");
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is listening on port 5000`))
