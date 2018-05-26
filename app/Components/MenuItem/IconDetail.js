import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RkCard, RkText, RkTabView } from 'react-native-ui-kitten';

const IconDetail = ({ icon, size, text }) => {
    let style = {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center'
    };
    
    return (
        <View style={style}>
            <Icon name={icon} size={16} />
            <Text style={{ fontSize: 12, paddingTop: 1, marginLeft: 5 }}>{text}</Text>
        </View>
    )
}

export default IconDetail;