import { useState } from "react";

const AddRecipeForm = () => {
    const [title,setTitle] =useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({})

    const validateForm =() => {
        const newErrors ={};
        if(!title.trim){
            newErrors.title = 'Recipe title is required'
        }

        if(!ingredients.trim()) {
            newErrors.ingredients ='Ingreients are required';
        }else if(ingredients.split(',') .length <2){
            newErrors.ingredients = 'Please list at least two ingredients'
        }

        if(!steps.trim()){
            newErrors.steps = 'Preparation steps are required'
        }

        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors);
            return;
        }

        const newRecipe = {
            title, 
            ingredients: ingredients.split(',').map(item => item.trim()),
            steps
        };

        console.log('Submitted Recipe: ', newRecipe);

        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <h1 className="text-2xl font-bold mb-6 md:text-3xl">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Recipe Title</label>
                    <input
                     type= "text"
                     id="title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className={`shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500': ''}`}
                     placeholder="Enter recipe title"
                     required/>
                     {errors.title && <p className="text-red-500 text-xs mt-2">{errors.title}</p>}
       

                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">Preparation Steps</label>
                    <textarea id="ingredients"
                    value = {steps}
                    onChange={(e) => setSteps(e.target.value)}
                    className={`shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients? 'border-re-500' : ''}`}
                    placeholder ="Enter ingredient (seperated by commas )"
                    rows="4"
                    required/>
                    {errors.ingredients && <p className="text-red-500 text-xs mt-2">{errors.ingredients}</p>}
        
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">Preparation Steps

                    </label>
                    <textarea
                     id="steps"
                      value={steps}
                      onChange={(e) => setSteps(e.target.value)}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' :''}`}
                      placeholder="Enter preparation steps"
                      rows="6"
                      required />
                       {errors.steps && <p className="text-red-500 text-xs mt-2">{errors.steps}</p>}
        
                </div>
                <button
                type="submit" 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Recipe
                </button>
            </form>

        </div>
    )
}

export default AddRecipeForm