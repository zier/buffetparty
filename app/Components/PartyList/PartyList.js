import React from 'react';
import PropTypes from 'prop-types';

import { FlatList, RefreshControl } from 'react-native';

import PartyItem from '../PartyItem/PartyItem';

const PartyList = ({ partyItems, onPressItem, onRefresh }) => {
    state = {
        refreshing: false
    }

    const renderRow = (menu) => <PartyItem onPressItem={onPressItem} {...menu.item} />
    const keyExtractor = (menu, index) => '_' + index

    return <FlatList 
        style={{backgroundColor: '#E0E0E0', paddingLeft: 10, paddingRight: 10, paddingBottom: 50 }} 
        keyExtractor={keyExtractor} 
        data={partyItems} 
        renderItem={renderRow}
        refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={onRefresh}
            />}
     />
}

export default PartyList;
