import React, { Component } from "react";
import './Counter.css';
import PropTypes from 'prop-types';


// export default this Class-Component
class Counter extends Component {
   // Define initial State in a Constructor:
   constructor( props ) {
      super(props);  //  NEVER forget to call super() method.

      this.state = {
         count: 0
      };

      this.incrementFomParent = this.incrementFomParent.bind(this);  // ALWAYS bind Methods in the Class inside its constructor
      this.decrementFomParent = this.decrementFomParent.bind(this);
      this.resetCount = this.resetCount.bind(this);
   }


   // RENDER Method
   render() {
      return (
          <div className="counter">
             <CounterButton by={ 1 } incrementMethod={ this.incrementFomParent } decrementMethod={ this.decrementFomParent }/>
             <CounterButton by={ 5 } incrementMethod={ this.incrementFomParent } decrementMethod={ this.decrementFomParent }/>
             <CounterButton by={ 10 } incrementMethod={ this.incrementFomParent } decrementMethod={ this.decrementFomParent }/>
             <br/>
             <p className="count" style={ { color: "blue" } }>{ this.state.count }</p>
             <div>
                <button className={ "resetBtn" } onClick={ this.resetCount }>reset</button>
             </div>
          </div>
      );
   }


   // Method:
   incrementFomParent( by ) {
      // console.log(`increment from Child Component by ${ by }`);

      //--- Regular function:
      // this.setState({
      //    count: this.state.count + by
      // });

      //--- Arrow function:
      this.setState(( prevState ) => ( {
         count: prevState.count + by
      } ));

      //--- Arrow function passing state and props:
      // this.setState((state,props) => ( {
      //    count: state.count + props.by
      // } ));

   }  // End Method :  incrementFomParent()


   decrementFomParent( by ) {
      //--- Arrow function:
      this.setState(( prevState ) => ( {
         count: prevState.count - by
      } ));
   }  // End Method :  decrementFomParent()


   resetCount() {
      //--- Arrow function:
      this.setState({ count: 0 });
   } // End Method :  resetCount()

} // End of Class Component : Counter

//====================================================================================-//

class CounterButton extends Component {

   // Define initial State in a Constructor:
   constructor( props ) {
      super(props);  //  NEVER forget to call super() method.

      /*this.state = {
         count: 0
      };

      // ALWAYS bind Methods in the Class:
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);*/
   }


   // Render Method (using Regular Function)
   render() {
      return (
          /*   Arrow Method :
          *    IF we want to add a Parameter/Args/Props into
          *    an EventListener (onClick()), we have to use an Arrow Method(Anonymous/Call-back Method).
          *    Otherwise, without the arrow(()=>), we are DIRECTLY calling a method(onClick={methodName()})...
          *    It's NOT ALLOWED!!! It needs to be : onClick={ () => this.props.methodName(parameter/args) }
          * */
          <div>
             <button onClick={ () => this.props.incrementMethod(this.props.by) }>+{ this.props.by }</button>
             <button onClick={ () => this.props.decrementMethod(this.props.by) }>-{ this.props.by }</button>

             {/*
             <button onClick={ this.increment }>+{ this.props.by }</button>
             <button onClick={ this.decrement }>-{ this.props.by }</button>
             */ }
          </div>
      );
   }

   /*

      // Methods:
      // Update State - Increment
      increment() {

         //--- Arrow function:
         // this.setState(() => ( {
         //    count: this.state.count + 1
         // } ));

         //--- Arrow function passing state:
         // this.setState((state,props) => ( {
         //    count: state.count + props.by
         // } ));


         //--- Regular function:
         this.setState({
            count: this.state.count + this.props.by
         });

         // CALL the 'incrementMethod Props' from Parent:
         // pass the 'props.by' to enable Parent to use the DISTINCT VALUES of each <CounterButton/> 'by' property.
         this.props.incrementMethod(this.props.by)
      }  // End Method : increment()

      // Update State - Decrement
      decrement() {

         //--- Regular function:
         this.setState({
            count: this.state.count - this.props.by
         });

         // CALL the 'incrementMethod Props' from Parent:
         // pass the 'props.by' to enable Parent to use the DISTINCT VALUES of each <CounterButton/> 'by' property.
         this.props.decrementMethod(this.props.by)
      } // End Method : decrement()
   */

} // End of Class Component : CounterButton


/* SET Props : */
// DEFAULT Props Value:
CounterButton.defaultProps = {
   by: 1
};
// DEFAULT Type of Value;
CounterButton.propTypes = {
   by: PropTypes.number
};


export default Counter
