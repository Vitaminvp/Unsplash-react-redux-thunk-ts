import * as React from "react";

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
    PHONE = 'phone'
}

interface IProps {
    type: InputTypes
}

interface IState {
    value: string
}

export class Input extends React.Component<IProps, IState>{
    render(){
        return <div className={'input'}>
            <input type={this.props.type} className={'input__nativ-input'}/>
        </div>
    }
}