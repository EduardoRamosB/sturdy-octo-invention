const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Static dir to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'Eduardo H. Ramos' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', name: 'Eduardo H. Ramos' })
})

app.get('/help', (req, res) => {
  res.render('help', { title: 'Help', name: 'Eduardo H. Ramos' })
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})