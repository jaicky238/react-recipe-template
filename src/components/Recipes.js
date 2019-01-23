import React, { Component } from 'react'

export default class Recipes extends Component {
  render() {
   // console.log(this.props.recipe)
   const{
     image_url,
     title,
     source_url,
     publisher,
     recipe_id
   } = this.props.recipe;
  const {handleDetails} = this.props;
    return (
     <React.Fragment>
       <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img src={image_url} className="image-card-top" style = { {height:"14rem" }}alt="recipe" />
            <div className="card-body  text-capitalize">
            <h6> {title}</h6>
            <h6 className="text-warning text-slanted"> provided by {publisher}</h6>
            </div>
            <div className="card-footer">
            <button type="btn" className="btn btn-primary text-capitalize" onClick={handleDetails}>
            details
            </button>
            <a href={source_url} className="btn btn-success text-capitalize mx-2" target="_blank" > recipe url</a>
            </div>
          </div>
       </div>
     </React.Fragment>
    )
  }
}
