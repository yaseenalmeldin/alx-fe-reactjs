import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='/recipe/:id' element={<RecipeDetail/>}></Route>
        <Route path='/add-recipe' element ={<AddRecipeForm/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
