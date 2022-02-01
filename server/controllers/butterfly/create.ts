import express from 'express'
import knex from '../../db'
import { Butterfly } from './types'

const router: express.Router = new (express.Router as any)()

router.post('/', async (req, res) => {
  const butterflies = await knex('butterfly')
 const name=req.body.name
 const species=req.body.species
 const image_url=req.body.image_url
 const link=req.body.link
 console.log("name:=>",name);
   // .select<Butterfly[]>('*')
// insert an object to butterfly table
console.log("requestbody:", req.body);
await knex('butterfly').insert({id: 49, name: name, species: species, image_url: image_url, link: link })
 .then(()=>{
   knex.select().from('butterfly').then(function(butterfly){
     res.send(butterfly)
   })
 }) 
 
})

export { router }; 
