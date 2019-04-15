import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";
import classnames from "classnames";


interface IProps {
    onSubmit: (value: string) => void,
    className: string
}

interface IState {
    value: string
}

export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        value: ''
    };
    private onInputChange = (value: string) => {
        this.setState(state => ({
            ...state,
            value
        }));
    };
    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };

    render(){
        const { value } = this.state;
        const classNames = classnames('search-form');
        return <form onSubmit={this.onSubmit} className={classNames}>

                <Input
                    name={'searchInput'}
                    onChange = {this.onInputChange}
                    type = {InputTypes.TEXT}
                    value = {value}
                />

                <Input
                    name={'filterInput'}
                    onChange = {this.onInputChange}
                    type = {InputTypes.TEXT}
                    value = {value}
                />
            </form>

    }
}