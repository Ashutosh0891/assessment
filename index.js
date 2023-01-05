const connectToMongo = require('./db');
const fs = require('fs')
const express = require('express')
const Magazine=require('./modals/Magazines')
const Books=require('./modals/Books')
const csv=require('csvtojson')
const { Parser } = require('json2csv');



const app = express()
const port = 5000
connectToMongo();
app.use(express.json())

//1)-This is Home Page

app.get('/', (req, res) => {
  res.send("This is Home Page")
})  


//2)-To Read all CSV files and dispalying into json format -

//3)-Converting author.csv into Json format

app.get('/authorJSON', (req, res) => {
  const csvFilePath='author.csv'
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
      res.json(jsonObj);
      
  })
})


//4)-Converting books.csv into Json format

app.get('/booksJSON', (req, res) => {
  const csvFilePath='books.csv'
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
      res.json(jsonObj);
      
  })
})


//5)-Converting magazines.csv into Json format

app.get('/magazinesJSON', (req, res) => {
  const csvFilePath='magazines.csv'
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
      res.json(jsonObj);
      
  })
})


//6)-Display the list of all magazines in json format

app.get('/magazines',async(req,res)=>{
  const magazines= await Magazine.find({})
  
 res.json(magazines)
})


//7)-find magazines by authors and isbn

app.get('/magazines/:key',async(req,res)=>{

  const magazines= await Magazine.find({
    "$or":[
      {"authors":{$regex:req.params.key}},
      {"isbn":{$regex:req.params.key}}
    ]
  })
  
 res.json(magazines)
})


//8)-Display the list of all books in json format

app.get('/books',async(req,res)=>{
  const books= await Books.find({})
  
 res.json(books)
})


//9)-find books by title and isbn

app.get('/books/:key',async(req,res)=>{

  const books= await Books.find({
    "$or":[
      {"title":{$regex:req.params.key}},
      {"isbn":{$regex:req.params.key}}
    ]
  })
  
 res.json(books)
})


//10)-Display both books and magaiznes 

app.get('/both',async(req,res)=>{
  const magazines= await Magazine.find({})
  const books= await Books.find({})
  res.json(magazines.concat(books))
})


//11)-Display both books and magaiznes sorted in asc order by title

app.get('/both/sort',async(req,res)=>{
 const magazines= await Magazine.find({}).sort({title:1})
 const books= await Books.find({}).sort({title:1})
 res.json(magazines.concat(books))
})


//12)-Export json files into csv format and csv files folder is created to store csv files

//13)-Export books.json file into csv file ./csvFiles/books.csv'

app.get('/booksCSV', (req, res) => {
  const books=require('./books.json')
  const parserObj = new Parser();
  const csv = parserObj.parse(books);
  console.log(csv)
  res.send(csv)
  fs.writeFileSync('./csvFiles/books.csv',csv)
})


//14)-Export magazine.json file into csv file ./csvFiles/magazines.csv'

app.get('/magazinesCSV', (req, res) => {
  const magazines=require('./magazine.json')
  const parserObj = new Parser();
  const csv = parserObj.parse(magazines);
  console.log(csv)
  res.send(csv)
  fs.writeFileSync('./csvFiles/magazines.csv',csv)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

