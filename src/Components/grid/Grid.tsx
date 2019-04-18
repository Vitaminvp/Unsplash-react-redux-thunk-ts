import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";
import {connect} from "react-redux";
import {fetchItems} from "../../actions/unsplash";


interface Props {
    items: Array<Image>;
    total: number;
    totalPages: number;
    filterInput: string;
    text: string;
    onDivClick: ()=> void
}

class Grid extends React.PureComponent<Props, {}> {
    render() {
        const {items, filterInput, onDivClick} = this.props;
        const filteredItems = [...items].filter(item => {
            if (item.description) {
                const regex = new RegExp(filterInput, 'gi');
                return item.description.match(regex);
            } else {
                return true;
            }


        });
        return <div className={'grid'}>
            <div onClick={onDivClick}>{this.props.text}</div>
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

const mapStateToProps = (state: any) => {
    return {
        text: state.unsplash.text
    }
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        onDivClick: () => {
            dispatch(fetchItems())
        }
    }
}

const GridWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export {GridWrapper as Grid};