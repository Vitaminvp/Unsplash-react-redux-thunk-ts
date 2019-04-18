import React from "react";
import {Image} from '../../types/API';
import './Grid.scss';
import {GridItem} from "../gridItem";
import {fetchItems} from "../../actions";
import {connect} from "react-redux";
import {Button} from "../button";
import {ButtonTypes} from "../../App";



interface Props {
    items: Array<Image>;
    total: number;
    totalPages: number;
    filterInput: string;
}

class Grid extends React.PureComponent<Props, {}> {
    render() {
        const { items, total } = this.props; //filterInput
        // const filteredItems = [...items].filter(item => {
        //     if (item.description) {
        //         const regex = new RegExp(filterInput, 'gi');
        //         return item.description.match(regex);
        //     } else {
        //         return true;
        //     }
        //
        //
        // });
        return <>
            <div className={'grid'}>
                {
                    items.map(item => {
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
                <Button className="native-button" type={ButtonTypes.BUTTON} >Show more {total ? `(${items.length} of ${total})` : ''}</Button>
                : null
            }
            {/*onClick={this.loadImages}*/}
            </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        items: state.unsplash.items,
        total: state.unsplash.total
    }
};

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         onSubmit: (searchInput: string) => {
//             dispatch(fetchItems( {searchInput, currentPage: 1}))
//         }
//     }
// };

const GridWrapper = connect(
    mapStateToProps
)(Grid);

// export { SearchForm};
export {GridWrapper as Grid};

//export {Grid};