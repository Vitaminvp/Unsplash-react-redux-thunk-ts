import React from "react";
import "./Image.scss";
import {connect} from "react-redux";
import {fetchImage} from "../../actions/image";



interface IProps {
    url?: string,
    id?: string,
    description?: string,
    likes?: number,
    link?: string,
    height?: number,
    className?: string,
    match: any,
    onLoad: (id:string)=>void
}

interface IState {
}

class Image extends React.Component<IProps, IState>{
    componentDidMount(){
        //console.log("ths.props", this.props.match.params.id);
        this.props.onLoad(this.props.match.params.id);
    }
    render(){
        const { url, likes, link, description, className: classN, height, id } = this.props;
        const titleStyle = {
            height: `${height}px`,
        };

        return <article className={classN}>
            <div className="image">
                <h2>{this.props.match.params.id}</h2>
                <img src={url} alt="" />
            </div>
        </article>
    }
}




const mapStateToProps = (state: any) => {
    return {
        searchInput: state.unsplash.searchInput
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLoad: (imageId: string) => {
            dispatch(fetchImage( {imageId}))
        },
    }
};

const ImageWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Image);

export {ImageWrapper as Image};