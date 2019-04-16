import * as React from "react";
import {SyntheticEvent} from "react";
import "./Input.scss";

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps {
    type: InputTypes,
    value: string,
    onChange: (value: string, name: string) => void
    name: string
    label: string
}

interface IState {
    value: string,
}

export class Input extends React.Component<IProps, IState>{
    onChange = (e: SyntheticEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget;
        this.props.onChange(value, name);
    };
    render(){
        const { value, name, label } = this.props;
        return <div className={'input__native-group'}>
                <input
                    name={name}
                    onChange = {this.onChange}
                    type={this.props.type}
                    className={'input__native-input'}
                    autoComplete="off"
                    value={value}
                    onFocus={(e)=> e.currentTarget.value = ''}
                />
                <label className="input__native-label">{label}</label>
                <span className="input__native-highlight">&nbsp;</span>
                <span className="input__native-bar">&nbsp;</span>
            </div>

    }
}