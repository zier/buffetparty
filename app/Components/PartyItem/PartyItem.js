import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { RkCard } from 'react-native-ui-kitten';

import IconDetail from './IconDetail'
import UserDetail from './UserDetail'

const PartyItem = ({ id, username, userImg, menuImg, description, peopleJoin, peopleLimit, price, appointDatetime, onPressItem }) => {
    const onPress = () => {
        onPressItem(id)
    }

    return (
        <TouchableHighlight onPress={onPress}>
            <RkCard  style={{ marginBottom: 10 }} rkType='story'>
                <View rkCardHeader>
                <UserDetail username={username} userImg={userImg} appointDatetime={appointDatetime} />
                </View>
                <Image onPress={onPress} rkCardImg source={{ uri: menuImg }} />
                <View rkCardContent>
                    <Text>
                        {description}
                    </Text>
                </View>
                <View rkCardFooter>                    
                    <IconDetail icon='local-atm' text={price + ' bath'} />
                    <IconDetail icon='directions-run' text={peopleJoin + '/' + peopleLimit} />
                </View>
            </RkCard>
        </TouchableHighlight>
    )
}

export default PartyItem