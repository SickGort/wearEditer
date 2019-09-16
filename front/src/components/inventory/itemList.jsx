import React from 'react';
import GridList from '@material-ui/core/GridList';
import Divider from '@material-ui/core/Divider';
import { ItemTable, ItemColumn, ItemTitle, ItemData, ItemContentListDiv } from '../../style/inventory/itemList';
import { HOW_TO_DISPLAY, LOADING, ITEM_COLUMN, MENU } from '../../constants/parameter';
import DetailModal from '../../containers/inventory/detailModal';
import ItemListSetting from '../../containers/inventory/itemListSetting';
import image from '../../stub/image/kamakura.JPG';
import { ItemListImg, ItemGridImg, GridDisplayImg } from '../../style/parts/img';
import gridSVG from '../../style/image/grid.svg';
import listSVG from '../../style/image/list.svg';
import { ItemListSettingDiv } from '../../style/inventory/itemList';
import { isMobile } from '../../constants/functions';
import { GridListTile, withStyles, GridListTileBar } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';

const useStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: '10px',
  },
  chipRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  chip: {
    // margin: theme.spacing(1),
  },
};

class ItemList extends React.Component {
  componentWillMount() {
    const { loadImageContentList } = this.props;
    loadImageContentList();
  }

  createItemList() {
    const { openItemDetailModal, itemList } = this.props;
    const contentList = itemList.order.map(id => {
      const current = itemList.list.find(item => item.itemId === id);
      const { isPublic, part, data, shop, itemId } = current;
      const publicRange = (isPublic) ? '公開する' : '公開しない';
      return (
        <ItemColumn onClick={() => openItemDetailModal(itemId)} >
          <ItemData>
            <ItemListImg src={image} alt="" />
          </ItemData>
          <ItemData >{part}</ItemData>
          <ItemData >{shop.name}</ItemData>
          <ItemData >{shop.url}</ItemData>
          <ItemData >{publicRange}</ItemData>
        </ItemColumn>
      );
    });
    return contentList;
  }

  createItemGrid() {
    const { openItemDetailModal, itemList } = this.props;
    const contentList = itemList.order.map(id => {
      const current = itemList.list.find(item => item.itemId === id);
      return (
        <GridListTile key={image} cols={1}>
          <img src={image} alt='sample' onClick={() => openItemDetailModal(current.itemId)} />
          <GridListTileBar
            title={current.part}
            subtitle={<span>by: {current.shop.name}</span>}
          />
        </GridListTile>
      );
    });
    return contentList;
  }

  createContents() {
    const { itemList, classes } = this.props;
    switch (itemList.howToDisplay) {
      case HOW_TO_DISPLAY.LIST:
        return (
          <ItemTable >
            <ItemColumn >
              <ItemTitle>{ITEM_COLUMN.IMAGE}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.TAG}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.SHOP_NAME}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.ITEM_URL}</ItemTitle>
              <ItemTitle >{ITEM_COLUMN.PUBLIC_RANGE}</ItemTitle>
            </ItemColumn>
            {this.createItemList()}
          </ItemTable>
        );
      case HOW_TO_DISPLAY.GRID:
        return (
          <ItemTable >
            <Divider />
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {this.createItemGrid()}
              </GridList>
            </div>
          </ItemTable>
        );
      default:
        return "";
    };
  }

  handleChange = name => event => {
    const {
      changeToGridView, changeToListView, itemList,
    } = this.props;
    (itemList.howToDisplay === 'list')
      ? changeToGridView()
      : changeToListView();
  };

  createTagList() {
    const {
      itemList, changeList, classes,
    } = this.props;
    const tagList = (itemList.tags)? itemList.tags.map(tag =>{
      return (
      <Chip
        label={tag}
        className={classes.chip}
        onClick={() => changeList('tags', tag)}
        clickable
      />
    )}) : '';
    return tagList;
  }

  render() {
    const {
      itemList, classes, changeList,
    } = this.props;
    if (!itemList.list) return LOADING.S;
    return (
      <div>
        <ItemListSettingDiv>
          grid
          <Switch
            value="checkedF"
            color="default"
            onChange={this.handleChange('checkedF')}
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
          list
          <ItemListSetting />
          {this.createTagList()}
          {/* <Chip
            label="Basic Chip"
            className={classes.chip}
            onClick={() => changeList('tags', 'short')}
            clickable
          />
          <Chip
            label="Basic Chip"
            className={classes.chip}
            onClick={() => changeList('tags', 'Yarn')}
            clickable
          /> */}
        </ItemListSettingDiv>
        <ItemContentListDiv>
          {this.createContents()}
        </ItemContentListDiv>
        <DetailModal />
      </div >
    );
  }
}

export default withStyles(useStyles)(ItemList)