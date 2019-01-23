import React, { Component } from 'react';
import {recipe} from "../tempDetails";

export default class RecipesDetails extends Component {
   
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       recipe: recipe,
//       url:`https://www.food2fork.com/api/get?key=1729b0ec46be4f4bfd02e4b84c5983d2&rId=${this.props.id}`
//     }
//  }
//   async  componentDidMount(){   
//     try{
//       const data =  await fetch(this.state.url);
//       const jsonData = await data.json()
//       this.setState({
//         recipe : jsonData.recipe
//       })
//     }
//     catch(error){
//       console.log(error);  
//      }
//   } 

   state ={
     recipe:recipe
   }
   async  componentDidMount(){ 
   const id = this.props.id;
   const url = `https://www.food2fork.com/api/get?key=d71755ac70a2598b59c222e409be698e&rId=${id}`;

   try{
         const data =  await fetch(url);
          const jsonData = await data.json()
          this.setState((state,props)=>{
            return{
              recipe:jsonData.recipe
            }
          },()=>{})
        }
         catch(error){
           console.log(error);  
          }
  }
 
  render() {
    //console.log(this.state.recipe);
   const {
     image_url,
     publisher,
     publisher_url,
     source_url,
     title,
     ingredients
   } = this.state.recipe;

   const {handleIndex} = this.props;
    return (

        <React.Fragment>
     <div className="container">
      <div className="row mt-5">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button type="btn" className="btn btn-warning text-capitalize mb-3" onClick={()=>handleIndex(1)}>
            back to recipe list
            </button>
            <img src={image_url} className="d-block w-100" alt="rcipe" />
            {/* details */}
            </div>
            <div className="col-10 m-auto col-md-6 my-3">
           
              <h6 className="text-upprcase"> {title}</h6>
              <h6 className="text-warning text-capitalize text-slanted"> provided by {publisher}</h6>
              <a href={publisher_url}  target="_blank" rel="noopener noreferrer" className="btn btn-primary text-capitalize mt-2">
              publisher webpage</a>

              <a href={source_url}  target="_blank" rel="noopener noreferrer" className="btn btn-success text-capitalize mt-2 mx-3">
              recipe url </a>
              <ul className="list-group">
                <h2 className="mt-3 mb-4"> Ingredients</h2>
                {
                  ingredients.map((item,index)=>{
                      return(
                        <li key={index} className="list-group-item text-slanted">
                        {item}
                        </li>
                      )
                  })
                }
               
              </ul>
            </div>
          </div>
        </div>
     
    </React.Fragment>
    )
  }
}
