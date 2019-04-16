import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";


interface Props {
    items: Array<Image>;
    total: number;
    totalPages: number;
    filter: string;
}

interface State {
    value: string,
}

export class Grid extends React.PureComponent<Props, State> {
    render() {
        const { items, filter } = this.props;
        const filteredItems = [...items].filter(item => {
            if(item && item.description){
                return item.description.includes(filter)
            }
            return null;
        });
        return <div className={'grid'}>
            {
                filteredItems.map(item => {
                    const {description, urls, likes, id } = item;
                    return <GridItem className={'grid__item'} key={id} id={id} url={urls.small} description={description}
                                     likes={likes}/>
                })
            }
        </div>
    }
}