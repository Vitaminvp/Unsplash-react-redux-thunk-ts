import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";
import "./SearchForm.scss";
import classnames from "classnames";
import {Button} from "../button";
import {ButtonTypes} from "../../App";
import search from "../../img/search-img.png";
import {Radio} from "../radio";
import asc from "../../img/sort-amount-asc.svg";
import desc from "../../img/sort-amount-desc.svg";
import {fetchItems} from "../../actions/unsplash";
import {filterActionCreator} from "../../actions/filter";
import {connect} from "react-redux";


export enum Sort {
    ASC = 'asc',
    DESC = 'desc'
}
interface Props {
    onSubmit: (searchInput: string, currentPage: number) => void;
    onChange: (filterInput: string, radioInput: string) => void;
    className: string;
}
interface State {
    currentPage: number;
    searchInput: string;
    filterInput: string;
}


class SearchForm extends React.Component<Props, State>{
    state = {
        currentPage: 1,
        searchInput: '',
        filterInput: '',
        radioInput: Sort.ASC
    };
    private onFormChange = (e: SyntheticEvent<HTMLFormElement>) => {
        const { onChange } = this.props;
        const { searchInput, radioInput } = this.state;
        const nextSearchInput = e.currentTarget['searchInput'].value;

        const inputs = Array.from(e.currentTarget.elements).filter((element:any) => {
            if(element && element['name']){
                return element['name'];
            }
            return null;
        });
        const value = inputs.reduce((acc:object, cur:any) => {
            if(cur.name){
                if(cur.name === 'radioInput'){
                    if(cur.checked === true){
                        return {...acc, [cur.name]: cur.id};
                    }
                    return acc;
                }else{
                    return {...acc, [cur.name]: cur.value};

                }
            }
            return acc;
        }, {});

        this.setState(state => ({...state, ...value}), () => {
            if(nextSearchInput === searchInput){
                onChange(this.state.filterInput, radioInput);
            }
        });

    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {searchInput, currentPage} = this.state;
        this.props.onSubmit(searchInput, currentPage);
    };

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
                <div className={'search'}>
                    <Radio
                        id={'desc'}
                        name={'radioInput'}
                        type = {InputTypes.RADIO}
                        label = {<img src={desc} />}
                        //checked = {true}
                    />
                    <Radio
                        id={'asc'}
                        name={'radioInput'}
                        type = {InputTypes.RADIO}
                        label = {<img src={asc} />}

                    />
                </div>
            </form>

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSubmit: (searchInput: string, currentPage: number) => {
           dispatch(fetchItems( {searchInput, currentPage}))
        },
        onChange: (filterInput: string, radioInput: string) => {
            dispatch(filterActionCreator({filterInput, radioInput}))
        }
    }
};

const SearchFormWrapper = connect(
    null,
    mapDispatchToProps
)(SearchForm);

export {SearchFormWrapper as SearchForm};