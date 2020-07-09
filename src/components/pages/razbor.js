import React from 'react';
import Item from '../item/item';

const ParsingPage = () => {
    return (
        <Item imgUrl={['./img/parsing1.jpg','./img/parsing2.png']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default ParsingPage;