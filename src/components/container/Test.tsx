import * as React from 'react';
import { connect } from 'react-redux';
import * as Store from '../../store/Test';
import RaisedButton from 'material-ui/RaisedButton';
import { ApplicationState } from '../../models/ApplicationState';

type Props = Store.TestState & typeof Store.actionCreators;

class Test extends React.Component<Props,{}> {
  public render(){
    return(<div> 
      <h1>And guess what, we also have Redux</h1>
      <h3>{this.props.text}</h3>
      <RaisedButton 
        label='dispatch change action'
        onClick={this.props.testLoad}
      />
    </div>);
  }
}

const mapStateToProps = (state:ApplicationState, ownProps: any) =>  //state.test;
{
  return state.test;
}
//const mapDispatchToProps = (dispatch:any, ownProps: any) => 
export default connect(
  mapStateToProps,
  Store.actionCreators
)(Test);
