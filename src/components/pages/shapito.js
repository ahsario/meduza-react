import React from 'react';
import Item from '../item/item';
import Data from '../data';

const ShapitoPage = () => {
    return (
        <Item imgUrl={['./img/shapito1.jpg','./img/shapito2.jpg']}
        headerText={
            [Data.shapito[0].title,
            Data.shapito[1].title]}
        bodyText={
            [Data.shapito[0].body,
            Data.shapito[1].body]}>
        </Item>
    )
}

export default ShapitoPage;