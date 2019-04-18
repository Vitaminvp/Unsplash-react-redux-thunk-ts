import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";



interface Props {
    items: Array<Image>;
    total: number;
    totalPages: number;
    filterInput: string;
}

class Grid extends React.PureComponent<Props, {}> {
    render() {
        const {items, filterInput} = this.props;
        const filteredItems = [...items].filter(item => {
            if (item.description) {
                const regex = new RegExp(filterInput, 'gi');
                return item.description.match(regex);
            } else {
                return true;
            }


        });
        return <div className={'grid'}>
            {
                filteredItems.map(item => {
                    const {description, urls, likes, id} = item;
                    return <GridItem className={'grid__item'}
                                     key={id} id={id}
                                     url={urls.small}
                                     description={description}
                                     likes={likes}/>
                })
            }
        </div>
    }
}



export {Grid};