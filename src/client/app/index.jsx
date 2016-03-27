import React from 'react';
import {render} from 'react-dom';
import FormComponent from './components/FormComponent.jsx';
// import ClassifyComponent from './components/ClassifyComponent.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <div className="clearfix text-center"><h5>React and Clarifai! :-) </h5></div>
        <FormComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
