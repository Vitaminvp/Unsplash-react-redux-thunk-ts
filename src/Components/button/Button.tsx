import React, {ButtonHTMLAttributes} from "react";
import classnames from "classnames";

//import {SyntheticEvent} from "react";



interface IProps extends  ButtonHTMLAttributes<HTMLButtonElement>{
    classNames?: string,
}

export const Button: React.FunctionComponent<IProps> = ({ children, classNames, ...props }) => {

    return <button className={classnames('button', classNames)} {...props}>
        {children}
    </button>
};