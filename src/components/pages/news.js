import React from 'react';
import Item from '../item/item';
import Data from '../data';

const NewsPage = () => {

    return (
        <Item imgUrl={['./img/news1.jpg','./img/news2.jpg']}
              headerText={
                  [Data.news[0].title,
                  Data.news[1].title]}
              bodyText={
                  [Data.news[0].body,
                  Data.news[1].body]}>
        </Item>
    )
}

export default NewsPage;