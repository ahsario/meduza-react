import React from 'react';
import Item from '../item/item';
import Data from '../data';

const HistoryPage = () => {
    return (
        <Item imgUrl={['./img/history1.jpg','./img/history2.jpg']}
        headerText={
            [Data.history[0].title,
            Data.history[1].title]}
        bodyText={
            [Data.history[0].body,
            Data.history[1].body]}>
        </Item>
    )
}

export default HistoryPage;