import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";


class TodoComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         id: this.props.match.params.id,
         description: '',
         targetDate: moment(new Date()).format('YYYY-MM-DD')
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.validate = this.validate.bind(this);
   }


   // Invoke TodoDataService in this life-cycle method:
   componentDidMount() {
      // if id is -1 ,  it's not 'retrieveTodo', just a blank for adding a new one.
      if ( this.state.id === -1 ) {
         return;
      }

      let username = AuthenticationService.getLoggedInUserName();
      TodoDataService.retrieveTodo(username, this.state.id)
          .then(res => this.setState({
             description: res.data.description,
             targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')
          }));
   }

   validate( values ) {
      let errors = {};
      if ( values.description.length < 5 ) {
         errors.description = 'Your todo must not be blank and at least 5 Characters long.';
      }

      if ( !moment(values.targetDate).isValid() ||
          moment(values.targetDate).isBefore(moment().subtract(1, 'day')) ) {
         errors.targetDate = 'Please enter a valid target date.';
      }
      return errors;
   }

   onSubmit( values ) {
      let username = AuthenticationService.getLoggedInUserName();
      let todoDetails = {
         id: this.state.id,
         description: values.description,
         targetDate: values.targetDate
      };

      // if id is -1 ,  it's not 'retrieveTodo', just a blank for adding a new one.
      if ( this.state.id === -1 ) {
         TodoDataService.createTodo(username, this.state.id,todoDetails)
             .then(() => this.props.history.push('/todos'));  // Redirect back to ListTodoComponent.jsx
      } else {
         TodoDataService.updateTodo(username, this.state.id, todoDetails)
             .then(() => this.props.history.push('/todos'));  // Redirect back to ListTodoComponent.jsx
      }

      // console.log(values);
   }

   render() {
      let { description, targetDate } = this.state;

      return (
          <div>
             <h1>Todo</h1>
             {/*Todos Component for id - { this.props.match.params.id }*/ }
             <div className="container">
                <Formik
                    initialValues={ { description, targetDate } } // This is required for us to assign the input data
                    onSubmit={ this.onSubmit }
                    validate={ this.validate }
                    validateOnChange={ false }
                    validateOnBlur={ false }
                    /* This is important to set to 'true', so if an item's selected the form will re-initialize displaying the selected value */
                    enableReinitialize={ true }
                >
                   { ( props ) => (
                       <Form>
                          <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                          <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>

                          <fieldset className="form-group">
                             <label htmlFor="description" className="float-left">Description</label>
                             <Field className="form-control" type="text" id="description" name="description"/>
                          </fieldset>
                          <fieldset className="form-group">
                             <label htmlFor="targetDate" className="float-left">Target Date</label>
                             <Field className="form-control" type="date" id="targetDate" name="targetDate"/>
                          </fieldset>
                          <button className="btn btn-lg btn-primary float-left" type="submit">Save</button>
                       </Form>
                   ) }
                </Formik>
             </div>
          </div>
      );
   }
}


export default TodoComponent
