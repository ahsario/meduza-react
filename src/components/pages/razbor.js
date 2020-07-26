import React from 'react';
import Item from '../item/item';
import Data from '../data';

const ParsingPage = () => {
    return (
        <Item imgUrl={['./img/parsing1.jpg','./img/parsing2.png']}
        headerText={
            [Data.parsing[0].title,
            Data.parsing[1].title]}
        bodyText={
            [Data.parsing[0].body,
            Data.parsing[1].body]}>
        </Item>
    )
}

export default ParsingPage;