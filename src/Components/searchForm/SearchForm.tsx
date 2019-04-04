import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";


interface IProps {
    onSubmit: (value: string) => void
}

interface IState {
    value: string
}

export class SearchForm extends React.Component<IProps, IState>{
    public state = {
        value: ''
    };
    private onInputChange = (value: string) => {
        this.setState(state => ({...state, value}));
    };
    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    };

    render(){
        const { value } = this.state;
        return <form onSubmit={this.onSubmit}>
                <Input
                    onChange = {this.onInputChange}
                    type = {InputTypes.TEXT}
                    value = {value}
                />
            </form>

    }
}