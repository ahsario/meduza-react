import React from 'react';
import Item from '../item/item';

const KoronavirusPage = () => {
    return (
        <Item imgUrl={['./img/coronavirus1.jpg','./img/coronavirus2.jpg']}
              headerText={['Интересный заголовок','Интересный заголовок']}
              bodyText={['Бла бла бла.....всякая хуета здесь...','Бла бла бла.....всякая хуета здесь...']}>
        </Item>
    )
}

export default KoronavirusPage;