import React, { Component } from 'react';
import Recipes from "./Recipes";
import RecipeSearch from "./RecipesSearch";

export default class RecipesList extends Component {
  render() {
     const { recipes,handleDetails,value,handleSubmit,handleChange } = this.props; 
     //console.log("from recipes" +recipes[0].recipe_id);
    return (
   
         <React.Fragment>
        
         <RecipeSearch  value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
         <div className="container">  
         {/* title */}
          <div className="row">
              <div className="col-10 mx-auto txt-center text-upparcase">
                <h1 className="text-slanted text-center mt-4"> recipes List</h1>
              </div>
          </div>
          {/* end of title */}
          <div className="row">
          {
            recipes.map(recipe=>{
                return <Recipes key={recipe.recipe_id} recipe={recipe} handleDetails={()=>{handleDetails(0,recipe.recipe_id)}} value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
                
            })
          }
          </div>
         </div>
     </React.Fragment>
     
    )
  }
}
