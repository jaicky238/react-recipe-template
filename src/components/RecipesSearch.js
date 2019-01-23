import React, { Component } from 'react'

export default class RecipesSearch extends Component {
  render() {
    const{value,handleChange,handleSubmit} = this.props;
    return (
        <React.Fragment>
      <div className="container">
          <div className="row">
             <div className="col-10 mx-auto mt-5 text-center">
              <h1 className="text-slanted text-capitalize"> search for recipe with {" "}
            <strong className="text-danger" > food to fork</strong>
            </h1>
            <form className="mt-5" onSubmit={handleSubmit}>
            <label htmlFor="search" className="text-capitalize"> type recipes seperated by commas</label>     
                <div className="input-group">
                 <input type="text" name="search" className="form-control" placeholder="search cousine" value={value} onChange={handleChange} />
                  <div className="input-group-append">
                    <button type="submit" className="input-group-text bg-primary text-white"><i className="fa fa-search" /></button>
                  </div>
               </div>
            </form>
          </div>
          </div>
        </div>
    </React.Fragment>
    )
  }
}
