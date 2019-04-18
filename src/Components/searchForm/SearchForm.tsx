import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";
import "./SearchForm.scss";
import classnames from "classnames";
import {Button} from "../button";
import {ButtonTypes} from "../../App";
import search from "../../img/search-img.png";
import {fetchItems} from "../../actions";
import {connect} from "react-redux";
import getImages from "../../api";
import {string} from "prop-types";


interface IProps {
    onSubmit: (searchInput: string) => void;
    className: string;
    onFilter: (value: object) => void;
}

class SearchForm extends React.Component<IProps, {}>{
    private onFormChange = (e: SyntheticEvent<HTMLFormElement>) => {
        const { onFilter } = this.props;

        const inputs = Array.from(e.currentTarget.elements).filter((element:any) => {
            if(element && element['name']){
                return element['name'];
            }
            return null;
        });
        const value = inputs.reduce((acc:object, cur:any) => {
            if(cur.name){
                return {...acc, [cur.name]: cur.value};
            }
            return acc;
        }, {});
        onFilter(value);
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(e.currentTarget['searchInput'].value);
    };




    // state = {
    //     items: [],
    //     total: 0,
    //     totalPages: 0,
    //     currentPage: 1,
    //     searchInput: '',
    //     filterInput: ''
    // };
    //
    // private handleSearch = async (searchInput:string) => {
    //     const { currentPage } = this.state;
    //     //const responseData = await this.fetchImages(searchInput);
    //     const responseData = await getImages(searchInput, currentPage);
    //
    //     this.setState(state => ({...state, ...responseData }));
    // };
    //
    // private loadImages = () => {
    //     const currentPage = ++this.state.currentPage;
    //     this.setState(state => ({
    //         ...state, currentPage
    //     }), async ()=>{
    //         const { searchInput, currentPage } = this.state;
    //         const { items } = await getImages(searchInput, currentPage);
    //         const updateItems = [...this.state.items, ...items];
    //         this.setState(state => ({...state, items: updateItems}), () => console.log("this.state", this.state));
    //     });
    // };
    //
    // private onFilter = (value: object) => {
    //     this.setState(state => ({...state, ...value}));
    // };

    render(){
        const classNames = classnames('search-form', 'native-form');
        return <form onSubmit={this.onSubmit}  className={classNames} onChange={this.onFormChange} >
                <div className={'search'}>
                    <Input
                        name={'searchInput'}
                        type = {InputTypes.TEXT}
                        label = {'Search'}
                    />
                    <Button type={ButtonTypes.SUBMIT} classNames={'btn-search'} > <img src={search} alt="Search" className={'icon-search'} /></Button>
                </div>
                <Input
                    name={'filterInput'}
                    type = {InputTypes.TEXT}
                    label = {'Filter'}
                />
            </form>

    }
}

// const mapStateToProps = (state: any) => {
//     return {
//         items: state.unsplash.items
//     }
// };

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: (searchInput: string) => {
           dispatch(fetchItems( {searchInput, currentPage: 1}))
        }
    }
}

const SearchFormWrapper = connect(
    null,
    mapDispatchToProps
)(SearchForm);

// export { SearchForm};
export {SearchFormWrapper as SearchForm};