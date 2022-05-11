const express = require('express')
const router = express.Router()
const login = require("./login")
const admin = require('./admin')
const phonenumber = require('./numberOfCompany')
const Pluses = require('./ourPlus')
const Category = require('./cotegory')
const Technologies = require('./technologies')
const Customer = require('./Сustomers')
const Address = require('./address')
const product = require('./Products')
const order = require('./order')

const auth = require('../meddlewares/auth')
const uploadImg = require('../meddlewares/multer')

router
    .post('/login', login)
    .get('/admin', auth, admin)
    .get('/number', phonenumber)
    .get('/plus', Pluses)
    //Category
    .get('/allCotegory', Category.Get)
    .post('/newCategories',Category.Post)
    .put('/updateCategorie',auth,Category.Put)
    .delete('/deleteCategorie', auth, Category.Delete)
    // Technologies
    .get('/technologies', Technologies.Get)
    .post('/newtechnologie', Technologies.Post)
    .put('/updatetechnologie', auth, Technologies.Put)
    .delete('/deletetetechnologie', auth, Technologies.Delete)
    // Customer
    .get('/customer', Customer.Get)
    .post('/newCustomer', auth, Customer.Post)
    .put('/updateCustomer',Customer.Put)
    .delete('/deletecustomers',auth,Customer.Delete)
    //addres
    .get('/address', Address.Get)
    .post('/newAddress', uploadImg.array("images"), Address.Post)
    .put('/updateAddress', auth,uploadImg.array("images"),Address.Put )
    .put('/deleteAddress', auth,Address.delete )

    //product
    .get('/product', product.Get)
    .get('/GetByCotegory', product.GetByCotegory)
    .post('/newProduct', uploadImg.array("images"), product.Post)
    .put('/updateProduct', auth, uploadImg.array("images"), product.Put)
    .put('/udateActiveProduct', product.PutIscall)
    .delete('/deleteProduct', auth,uploadImg.array("images"),product.Delete )

    //order 
    .get('/order',order.Get)
    .post('/newOrder',auth,order.Post)
    .put('/updateOrder',auth,order.Put)
    
module.exports =router