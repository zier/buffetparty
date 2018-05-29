import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

import LoginForm from '../../app/Components/LoginForm/LoginForm'
import PartyItem from '../../app/Components/PartyItem/PartyItem'
import PartyList from '../../app/Components/PartyList/PartyList'
import PartyDetail from '../../app/Components/PartyDetail/PartyDetail'

storiesOf('LoginForm', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => (<LoginForm onSubmit={action('onSubmit')} onFacebookLogin={action('onFacebookLogin')} />))


const partyItem = {
    id: "1",
    userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0bzntXY5Gar_R73Fb6R949cAPrKW9RrOlOSq-8ZeA-31wZhRmA",
    menuImg: "http://www.triparoundthai.com/wp-content/uploads/2018/03/The-World-Tandoori-Cookery-Thursday.jpg",
    username: "Mary Jane",
    description: " One morning, when Gregor Samsa woke from happy dreams,he found himself transformed in ...",
    price: 500,
    peopleJoin: 1,
    peopleLimit: 4,
    appointDatetime: "5 Mar 2018 - 12:30"
}

storiesOf('PartyItem', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('sample data', () => (<PartyItem onPressItem={action('onPressItem')} {...partyItem}/>))


const partyItems = [
    {
        id: "2",        
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0bzntXY5Gar_R73Fb6R949cAPrKW9RrOlOSq-8ZeA-31wZhRmA",
        menuImg: "http://www.triparoundthai.com/wp-content/uploads/2018/03/The-World-Tandoori-Cookery-Thursday.jpg",
        username: "Mary Jane",
        description: " One morning, when Gregor Samsa woke from happy dreams,he found himself transformed in ...",
        price: 500,
        peopleJoin: 1,
        peopleLimit: 4,
        appointDatetime: "5 Mar 2018 - 12:30"
    },
    {
        id: "3",        
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0bzntXY5Gar_R73Fb6R949cAPrKW9RrOlOSq-8ZeA-31wZhRmA",
        menuImg: "http://www.triparoundthai.com/wp-content/uploads/2018/03/The-World-Tandoori-Cookery-Thursday.jpg",
        username: "Mary Jane",
        description: " One morning, when Gregor Samsa woke from happy dreams,he found himself transformed in ...",
        price: 500,
        peopleJoin: 1,
        peopleLimit: 4,
        appointDatetime: "5 Mar 2018 - 12:30"
    },
    {
        id: "4",    
        userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0bzntXY5Gar_R73Fb6R949cAPrKW9RrOlOSq-8ZeA-31wZhRmA",
        menuImg: "http://www.triparoundthai.com/wp-content/uploads/2018/03/The-World-Tandoori-Cookery-Thursday.jpg",
        username: "Mary Jane",
        description: " One morning, when Gregor Samsa woke from happy dreams,he found himself transformed in ...",
        price: 500,
        peopleJoin: 1,
        peopleLimit: 4,
        appointDatetime: "5 Mar 2018 - 12:30"
    }
]

storiesOf('PartyList', module)
    .add('sample data', () => (<PartyList onRefresh={action('onRefresh')} onPressItem={action('onPressItem')} partyItems={partyItems} />))


storiesOf('PartyDetail', module)
    .add('sample data', () => (<PartyDetail {...partyItem} />))
    