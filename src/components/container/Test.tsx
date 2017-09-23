import * as React from 'react';
import { connect } from 'react-redux';
import * as Store from '../../store/Test';
import RaisedButton from 'material-ui/RaisedButton';
import { ApplicationState } from '../../models/ApplicationState';
import Warning from 'material-ui/svg-icons/alert/warning';
import { colors } from '../../styles';

type Props = Store.TestState & typeof Store.actionCreators;

class Test extends React.Component<Props,{}> {
  public render(){
    return(<div> 
      <h2>>And guess what, we also have Redux</h2>
      <h3>{this.props.text}</h3>
      <Warning color={colors.orange}/>
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
