import React from 'react';
import Item from '../item/item';
import Data from '../data';

const PodcastsPage = () => {
    return (
        <Item imgUrl={['./img/podcast1.jpg','./img/podcast2.jpg']}
        headerText={
            [Data.podcasts[0].title,
            Data.podcasts[1].title]}
        bodyText={
            [Data.podcasts[0].body,
            Data.podcasts[1].body]}>
        </Item>
    )
}

export default PodcastsPage;