import React, { useEffect, useState } from "react";
import Recipe from '../../assets/receipe.jpg';
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState ([]);

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await fetch('data.json');
                const data = await response.json();
                setRecipes(data);

            }catch(error){
                console.error('Error fetching data: ', error)
            }
        };
        fetchData();
    }, []);

    return(
        <div className="container max-auto px-4 py-8 ">
            <h1 className="text3xl font-bold text-center mb-8">Recipes</h1>
            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                         <img src={Recipe} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-110" />
                         <h2 className="text-xl font-bold mb-2 hover:text-blue-500">{recipe.title}</h2>
                          <p className="text-gray-700">{recipe.summary}</p>
                        <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">View Recipe</Link>
               
                    </div>
                 ))}
                   
            </div>
        </div>
    )

}

export default HomePage;