import React from 'react';
import Item from '../item/item';

const PodcastsPage = () => {
    return (
        <Item imgUrl={['./img/podcast1.jpg','./img/podcast2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default PodcastsPage;