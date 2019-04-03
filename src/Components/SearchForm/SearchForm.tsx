import * as React from "react";
import {Input, InputTypes} from "../Input";


interface IProps {

}

interface IState {

}

export class SearchForm extends React.Component<IProps, IState>{
    render(){
        return <form>
                <Input type={InputTypes.TEXT} />
            </form>

    }
}