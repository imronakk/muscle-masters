import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Herobanner, Exercise, Searchexercises } from '../components/index'

const Home = () => {

  const [bodyPart, SetBodyPart] = useState('all')
  const [exercise, setEexercise] = useState([])

  return (
    <>
      <Box>
        <Herobanner/>

        <Searchexercises
          setEexercise={setEexercise}
          bodyPart={bodyPart}
          SetBodyPart={SetBodyPart}
        />

        <Exercise
          setEexercise={setEexercise}
          bodyPart={bodyPart}
          SetBodyPart={SetBodyPart} 
        />
        
      </Box>
    </>
  )
}

export default Home
