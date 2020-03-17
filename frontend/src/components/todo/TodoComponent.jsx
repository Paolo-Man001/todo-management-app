import React, { Component } from "react";
import moment from "moment";
import { Field, Form, Formik } from "formik";


class TodoComponent extends Component {
   constructor( props ) {
      super(props);
      this.state = {
         id: 1,
         description: '',
         targetDate: moment(new Date()).format('YYYY-MM-DD')
      };
      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit( values ) {
      if ( values.description === '' ) {
         alert('No blank description allowed!');
         return;
      }
      console.log(values);
   }

   render() {
      let { description, targetDate } = this.state;

      return (
          <div>
             <h1>Todo</h1>
             {/*Todo Component for id - { this.props.match.params.id }*/ }
             <div className="container">
                <Formik
                    initialValues={ { description, targetDate } } // This is required for us to assign the input data
                    onSubmit={ this.onSubmit }
                >
                   {
                      () => (
                          <Form>
                             <fieldset className="form-group">
                                <label htmlFor="description" className="float-left">Description</label>
                                <Field className="form-control" type="text" id="description" name="description"/>
                             </fieldset>
                             <fieldset className="form-group">
                                <label htmlFor="targetDate" className="float-left">Target Date</label>
                                <Field className="form-control" type="date" id="targetDate" name="targetDate"/>
                             </fieldset>
                             <button className="btn btn-lg btn-primary" type="submit">Save</button>
                          </Form>

                      )
                   }
                </Formik>
             </div>
          </div>
      );
   }
}


export default TodoComponent
