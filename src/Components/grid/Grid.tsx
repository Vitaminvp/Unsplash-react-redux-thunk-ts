import React from "react";
//import {SyntheticEvent} from "react";
import {Image} from '../../types/API';
import 'Grid.scss';
import {GridItem} from "../gridItem";



interface Props {
    items: Array<Image>
}

interface State {
    value: string,
}

export class Grid extends React.PureComponent<Props, State>{
    render(){
        const items = this.props.items.map(item => {
            const { description, urls, likes } = item;
            return <GridItem url={ urls.small } description={ description } likes={likes}
        });

        return <div className={'grid'}>

        </div>
    }
}