import React, { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try{
                const response = await fetch ('/data.json');
                const data = await response.json();
                const foundRecipe = data.recipes.find(recipe => recipe.id === parseInt(id))
                setRecipes(foundRecipe);

            }catch(err){
                setError(err);
            }finally{
                setLoading(False);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) return <div className="text-center py-10"><p className="text-lg font-semibold"> Loading.... </p></div>
    if(error) return <div className="text-center py-10"><p className="text-lg font-semibold text-red-500">Error loading recipe details.</p></div>
    if (!recipe) return <div className="text-center py-10"><p className="text-lg font-semibold">Recipe not found.</p>
</div>
    return(
    <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white hadow-lg rounded-lg overflow-hidden">
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
          <h2 className="text-3xl font-bold mb-4">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
         ))}
      </ul>
          <h2 className="text-3xl font-bold mb-4">Instructions</h2>
          <p className="text-gray-700 text-lg">{recipe.instructions}</p>
    </div>
    </div>






    // <div className="max-w-4xl mx-auto px-4 py-6">
    //         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    //             <img src={recipes.image} alt={recipes.title} className="w-full h-64 object-cover"/>
    //             <div className="p-6">
    //                 <h1 className="text-3xl font-bold mb-4">{recipes.title}</h1>
    //                 <p className="text-gray-700 text-lg">{recipes.summary}</p>

    //             </div>
    //         </div>
    //     </div>

    )
}

export default RecipeDetail;



