import React from "react";
//import {SyntheticEvent} from "react";
import "./GridItem.scss";



interface IProps {
    url: string,
    id: string,
    description: string,
    likes: number,
    link?: string,
    height?: number,
    className?: string
}

interface IState {
    value: string,
}

export class GridItem extends React.Component<IProps, IState>{

    render(){

        const { url, likes, link, description, className: classN, height } = this.props;
        const titleStyle = {
            height: `${height}px`,
        };

        return <article className={classN}>
            <a className="title" href="#" style={titleStyle}>{ description }</a>
            <div className="image">
                {/*<a href="#">*/}
                    <img src={url} alt="" />
                {/*</a>*/}
            </div>
        </article>
    }
}