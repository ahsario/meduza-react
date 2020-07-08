import React from 'react';
import Item from '../item/item';

const PlayPage = () => {
    return (
        <Item imgUrl={['./img/play1.jpg','./img/play2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default PlayPage;