import React from 'react';
import utils from '../Utils/utils';
import Form from 'react-bootstrap';

class FormComponent extends React.Component {

  constructor(props) {
      super(props);
      this.state = {source : 'Enter a URL of an image'};
      this.getImageSrc = this.getImageTag.bind(this);
    }

  getImageTag() {
    var image = $('.login-field').val();
    var desc = utils.getImageTags(image);
    console.log(desc);
    this.setState({source: desc});
  }

  render() {
    return (
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div className="login-form">
          <p className="text-center">Enter a URL to get its emoji description! </p>
          <div className="form-group">
            <input className="form-control login-field" placeholder={this.state.source}/>
          </div>
          <button className="btn btn-block btn-lg btn-info btn-block" onClick={this.getImageTag}>
            Describe
          </button>
        </div>
      </div>
    </div>
    );
  }
}

export default FormComponent;
