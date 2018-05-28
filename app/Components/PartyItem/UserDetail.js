import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { RkCard, RkText, RkTabView } from 'react-native-ui-kitten';

const UserDetail = ({ username, appointDatetime, userImg }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: userImg }} />
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 13, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{username}</Text>
                <Text style={{ fontSize: 11, marginTop: 5 }}>{appointDatetime}</Text>
            </View>
        </View>
    )
}

export default UserDetail;