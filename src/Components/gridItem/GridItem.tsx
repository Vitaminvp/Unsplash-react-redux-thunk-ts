import React from "react";
//import {SyntheticEvent} from "react";



interface IProps {
    url: string,
    id: string,
    description: string,
    likes: number,
    link?: string,
    className?: string
}

interface IState {
    value: string,
}

export class GridItem extends React.Component<IProps, IState>{

    render(){
        const { url, likes, link, description, className: classN } = this.props;
        return <div className={classN}>
            <img src={url} alt="" />
            <h3>{ description }</h3>
        </div>
    }
}