import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";
import {fetchItems} from "../../actions/unsplash";
import {connect} from "react-redux";
import {Button} from "../button";
import {ButtonTypes} from "../../App";

interface Props {
    items: Array<Image>;
    total: number;
    filterInput: string;
    currentPage: number;
    searchInput: string;
    onAddItems: (searchInput: string, currentPage: number)=> void;
}

class Grid extends React.PureComponent<Props, {}> {

    private loadImages = () => {
        const currentPage = this.props.currentPage + 1;
        this.props.onAddItems(this.props.searchInput, currentPage)
    };

    render() {
        const { items, total, filterInput} = this.props;
        const filteredItems = [...items].filter(item => {
            if (item.description) {
                const regex = new RegExp(filterInput, 'gi');
                return item.description.match(regex);
            } else {
                return true;
            }

        });
        return <>
            <div className={'grid'}>
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
            {items.length > 0 && total > items.length?
                <Button className="native-button" type={ButtonTypes.BUTTON} onClick={this.loadImages} >Show more {total ? `(${items.length} of ${total})` : ''}</Button>
                : null
            }
            </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.unsplash.items,
        total: state.unsplash.total,
        searchInput: state.unsplash.searchInput,
        filterInput: state.unsplash.filterInput,
        currentPage: state.unsplash.currentPage
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddItems: (searchInput: string, currentPage: number) => {
            dispatch(fetchItems( {searchInput, currentPage}))
        }
    }
};

const GridWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export {GridWrapper as Grid};

