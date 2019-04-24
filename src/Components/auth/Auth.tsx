import React from "react";
import {AuthAction, setToken} from "../../actions/auth";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteChildrenProps} from "react-router";
import {Button} from "../button";
import {ButtonTypes} from "../../App";
import {config} from "../../configs";


interface IProps extends RouteChildrenProps{
    set_Token(code:string): void;// => Dispatch<AuthAction>
}

class Auth extends React.Component<IProps, any>{
    componentDidMount(): void {
        const { search } = this.props.location;
        const code = search.slice(search.indexOf('=') + 1);
        this.props.set_Token(code);
    }

    private handleClick = () => {
        console.log("Click");
        window.location.href = `${config.oAuthAll}`;
    };

    render(): React.ReactNode {
        return <Button className="native-button" type={ButtonTypes.BUTTON} onClick={this.handleClick} >LogIn</Button>;
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => {
    return {
        set_Token: (code: string) => dispatch(setToken(code))
    }
};
const AuthContainer = connect(null, mapDispatchToProps)(Auth);

export  {AuthContainer as Auth};
