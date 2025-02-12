import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import ItemList from '../../containers/inventory/itemList';
import Top from '../../containers/top/topIndex';
import EditTagModal from '../../containers/common/editTagModal';
import AddContentModal from '../../containers/common/addContentModal';
import Setting from '../../containers/common/setting';
import SpeedDial from '../../containers/common/speedDial';
import { BodyDiv } from '../../style/common/body';
import { MENU } from '../../constants/parameter';
import Dashboard from '../../components/dashboard/dashboard';

export default class Body extends React.Component {

  componentWillMount() {
    const { movePage } = this.props;
    movePage(MENU.TOP);
  }

  createBodyContent() {
    const { history } = this.props;
    switch (history.page) {
      case MENU.TOP:
        return (<Top />);
      case MENU.ITEM_LIST:
        return (<ItemList />);
      case MENU.DASHBOARD:
        return (<Dashboard />);

      default:
        return '';
    }
  }

  render() {
    return (
      // <BrowserRouter>
      <BodyDiv>
        {/* <Route path='/' component={Top} /> */}
        <div style={{ paddingTop: '35px' }} />
        {this.createBodyContent()}
        <SpeedDial />
        <EditTagModal />
        <AddContentModal />
        <Setting />
      </BodyDiv>
      // </BrowserRouter>
    );
  }
}