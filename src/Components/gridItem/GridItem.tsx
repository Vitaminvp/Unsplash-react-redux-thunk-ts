import React from "react";
//import {SyntheticEvent} from "react";



interface IProps {
    url: string,
    description: string,
    likes: number,
    link?: string
}

interface IState {
    value: string,
}

export class GridItem extends React.Component<IProps, IState>{

    render(){
        const { url, likes, link, description} = this.props;
        return <div className={'grid-item'}>
            <img src={url} alt="" />
            <h3>{ description }</h3>
        </div>
    }
}