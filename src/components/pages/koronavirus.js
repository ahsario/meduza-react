import React from 'react';
import Item from '../item/item';
import Data from '../data';

const KoronavirusPage = () => {
    return (
        <Item imgUrl={['./img/coronavirus1.jpg','./img/coronavirus2.jpg']}
        headerText={
            [Data.coronavirus[0].title,
            Data.coronavirus[1].title]}
        bodyText={
            [Data.coronavirus[0].body,
            Data.coronavirus[1].body]}>
        </Item>
    )
}

export default KoronavirusPage;