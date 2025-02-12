import { connect } from 'react-redux';
import * as sideTabModule from '../../modules/common/sideTabAction';
import sideTab from '../../components/header/sideTab';


function mapStateToProps(state) {
  return {
    sideTab: (state.sideTab) ? state.sideTab : {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openSideTab: () => dispatch(sideTabModule.openSideTab()),
    closeSideTab: () => dispatch(sideTabModule.closeSideTab()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(sideTab);