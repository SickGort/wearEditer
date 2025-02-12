import ItemListReducer from './inventory/itemListReducer';
import HeaderReducer from './common/headerReducer';
import AccountReducer from './common/AccountReducer';
import SideTabReducer from './common/sideTabReducer';
import HistoryReducer from './common/historyReducer';
import EditTagModalReducer from './common/editTagModalReducer';
import AddContentReducer from './common/addContentReducer';
import SettingReducer from './common/settingReducer';
import SnackBarReducer from './common/snackBarReducer';

export default {
    header: HeaderReducer,
    itemList: ItemListReducer,
    account: AccountReducer,
    sideTab: SideTabReducer,
    history: HistoryReducer,
    editTags: EditTagModalReducer,
    addContent: AddContentReducer,
    setting: SettingReducer,
    snackBar: SnackBarReducer,
}
