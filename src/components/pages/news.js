import React from 'react';
import Item from '../item/item';

const NewsPage = () => {
    return (
        <Item imgUrl={['./img/news1.jpg','./img/news2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default NewsPage;