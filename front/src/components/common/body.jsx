import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ItemList from '../../containers/inventory/itemList';
import Top from '../../containers/top/topIndex';
import EditTagModal from '../../containers/common/editTagModal';
import AddContent from '../../containers/common/addContent';
import { BodyDiv } from '../../style/common/body';
import { MENU } from '../../constants/parameter';

export default class Body extends React.Component {

  componentWillMount() {
    const { movePage } = this.props;
    movePage(MENU.TOP);
  }

  createBodyContent() {
    const { history } = this.props;
    switch (history.page) {
      case 'TOP':
        console.log('==============');
        return (<Top />);
      case MENU.ITEM_LIST:
        return (<ItemList />)
      default:
        console.log('-------------history.page'); console.log(history.page);
        return '';
    }
  }

  render() {
    const { history } = this.props;
    console.log('-------------history'); console.log(history);
    console.log('-------------history.page)'); console.log(history.page);
    return (
      <BrowserRouter>
        <BodyDiv>
          <Route path='/' component={Top} />
          <EditTagModal />
          <AddContent />
        </BodyDiv>
      </BrowserRouter>
    );
  }
}