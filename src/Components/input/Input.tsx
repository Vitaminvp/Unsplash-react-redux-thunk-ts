import * as React from "react";
import {SyntheticEvent} from "react";

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps {
    type: InputTypes,
    value: string,
    onChange: (value: string) => void
    name: string
}

interface IState {
    value: string,
}

export class Input extends React.Component<IProps, IState>{
    onChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        this.props.onChange(value);
    };
    render(){
        const { value, name } = this.props;
        return <div className={'input'}>
            <input
                name={name}
                onChange = {this.onChange}
                type={this.props.type}
                className={'input__nativ-input'}
                value={value}
            />
        </div>
    }
}