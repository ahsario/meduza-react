import React from 'react';
import Item from '../item/item';

const ShapitoPage = () => {
    return (
        <Item imgUrl={['./img/shapito1.jpg','./img/shapito2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default ShapitoPage;