import React from "react";
//import {SyntheticEvent} from "react";
import {Image} from '../../types/API';
//import 'Nav.scss';
import {GridItem} from "../gridItem";
import {Button} from "../button";


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
                    const {description, urls, likes, id} = item;
                    return <GridItem className={'grid__item'} id={id} url={urls.small} description={description}
                                     likes={likes}/>
                })
            }

        </div>
    }
}