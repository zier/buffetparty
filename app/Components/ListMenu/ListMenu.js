import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, RefreshControl } from 'react-native';

import MenuItem from '../MenuItem/MenuItem';

const ListMenu = ({ menuItems, onPressItem, onRefresh }) => {
    state = {
        refreshing: false
    }

    const renderRow = (menu) => <MenuItem onPressItem={onPressItem} {...menu.item} />
    const keyExtractor = (menu, index) => '_' + index

    return <FlatList 
        style={{backgroundColor: '#E0E0E0', paddingLeft: 10, paddingRight: 10, paddingBottom: 50 }} 
        keyExtractor={keyExtractor} 
        data={menuItems} 
        renderItem={renderRow}
        refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={onRefresh}
            />}
     />
}

export default ListMenu;
