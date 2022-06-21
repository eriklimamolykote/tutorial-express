const express = require( 'express' )
const router = express.Router()
const { curso } = require( '../models' )

// const listaCursos = []

// router.get( '/', ( req, res ) => {

//     res.json( listCursos )

// })

router.get( '/', async ( req, res ) => {

    const cursos = await curso.findAll()
    res.json( cursos )

})

// router.post( '/', ( req, res ) => {

//     const dadosCurso = req.body
//     console.log( dadosCurso )
//     listCursos.push( dadosCurso )
//     res.send( 'Curso adicionado com sucesso!' )

// })

router.post( '/', async( req, res ) => {
    
    const { nome, ch } = req.body
    await curso.create( { nome, ch } )
    res.send( 'Curso adicionado com sucesso!' )
    
})

module.exports = router