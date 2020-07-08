import React from 'react';
import Item from '../item/item';

const HistoryPage = () => {
    return (
        <Item imgUrl={['./img/history1.jpg','./img/history2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default HistoryPage;