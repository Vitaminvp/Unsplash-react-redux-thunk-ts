import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";


interface Props {
    items: Array<Image>;
    total: number;
    totalPages: number;
}

interface State {
    value: string,
}

export class Grid extends React.PureComponent<Props, State> {
    render() {
        const { items, total } = this.props;
        return <div className={'grid'}>
            {
                items.map(item => {
                    const {description, urls, likes, id, height} = item;
                    return <GridItem className={'grid__item'} key={id} id={id} url={urls.small} description={description}
                                     likes={likes}/>
                })
            }

        </div>
    }
}