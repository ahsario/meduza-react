import React from 'react';
import Item from '../item/item';
import Data from '../data';

const PlayPage = () => {
    return (
        <Item imgUrl={['./img/play1.jpg','./img/play2.jpg']}
        headerText={
            [Data.plays[0].title,
            Data.plays[1].title]}
        bodyText={
            [Data.plays[0].body,
            Data.plays[1].body]}>
        </Item>
    )
}

export default PlayPage;