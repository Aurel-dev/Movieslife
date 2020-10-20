import React, { Component } from 'react';
import { Formik } from 'formik';

export default class SearchBar extends Component {

  submit = (values, actions) => {
    this.props.fetchMovies(values).then( () => actions.setSubmitting(false));        
  }

  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={ { query: '', language: 'fr-FR' } }
      >
        {({ values, handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
            <input name="query" className="flex-fill form-control mr-2" 
              placeholder="Rechercher..." value={ values.query } onChange={handleChange} onBlur={handleBlur} />
            <select name="language" className="mr-2 form-control w-25" 
              onChange={ handleChange } onBlur={ handleBlur }>
              <option value="fr-FR">Français</option>
              <option value="en-US">Anglais</option>
              <option value="de-DE">Allemand</option>
            </select>
            <button className="btn btn-small btn-info" type="submit" 
              disabled={isSubmitting}>GO</button>
          </form>
        )}
      </Formik>
    )
  }
}