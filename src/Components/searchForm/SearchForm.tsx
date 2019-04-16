import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";
import "./SearchForm.scss";
import classnames from "classnames";


interface IProps {
    onSubmit: (value: string) => void,
    className: string
}

interface IState {
    searchInput: string
    filterInput: string
}

export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        searchInput: '',
        filterInput: ''
    };
    private onInputChange = (value: string, name: string) => {
        console.log(value, name);
        this.setState(state => ({...state, [name]: value }), () => console.log(this.state));
    };
    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('e', e);
        this.props.onSubmit(this.state.searchInput);
    };

    render(){
        const { searchInput, filterInput } = this.state;
        const classNames = classnames('search-form', 'native-form');
        return <form onSubmit={this.onSubmit} className={classNames}>

                <Input
                    name={'searchInput'}
                    onChange = {this.onInputChange}
                    type = {InputTypes.TEXT}
                    value = {searchInput}
                    label = {'Search'}
                />

                <Input
                    name={'filterInput'}
                    onChange = {this.onInputChange}
                    type = {InputTypes.TEXT}
                    value = {filterInput}
                    label = {'Filter'}
                />

            </form>

    }
}