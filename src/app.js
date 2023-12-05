const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Static dir to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'Eduardo H. Ramos' })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/help', (req, res) => {
  res.render('help')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})