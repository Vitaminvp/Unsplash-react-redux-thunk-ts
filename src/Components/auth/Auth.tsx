import React from "react";
import {AuthAction, setToken} from "../../actions/auth";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteChildrenProps} from "react-router";


interface IProps extends RouteChildrenProps{
    setToken(code:string): void;// => Dispatch<AuthAction>
}

class Auth extends React.Component<IProps, any>{
    componentDidMount(): void {
        this.props.setToken();
    }

    render(): React.ReactNode {
        return <div/>;
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AuthAction>) => {
    return {
        setToken: (code: string) => dispatch(setToken(code))
    }
};
const AuthContainer = connect<null, IProps, null>(null, mapDispatchToProps)(Auth);

export  {AuthContainer as Auth};