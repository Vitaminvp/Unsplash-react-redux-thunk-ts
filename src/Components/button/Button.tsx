import React, {ButtonHTMLAttributes} from "react";
import './Button.scss';
import classnames from "classnames";

//import {SyntheticEvent} from "react";



interface IProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    classNames?: string,
}

export const Button: React.FunctionComponent<IProps> = ({ children, classNames, ...props }) => {

    return <button className={ classnames('btn', classNames) } {...props} type="button">
        <span>{children}</span>
    </button>
};