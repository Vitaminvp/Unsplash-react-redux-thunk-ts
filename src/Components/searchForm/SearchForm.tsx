import * as React from "react";
import {Input, InputTypes} from "../input";
import {SyntheticEvent} from "react";
import "./SearchForm.scss";
import classnames from "classnames";
import {Button} from "../button";
import {ButtonTypes} from "../../App";
import search from "../../img/search-img.png";


interface IProps {
    onSubmit: (value: string) => void;
    className: string;
    onFilter: (value: object) => void;
}

export class SearchForm extends React.Component<IProps, {}>{
    private onFormChange = (e: SyntheticEvent<HTMLFormElement>) => {
        const { onFilter } = this.props;

        const inputs = Array.from(e.currentTarget.elements).filter((element:any) => {
            if(element && element['name']){
                return element['name'];
            }
            return null;
        });
        const value = inputs.reduce((acc:object, cur:any) => {
            if(cur.name){
                return {...acc, [cur.name]: cur.value};
            }
            return acc;
        }, {});
        onFilter(value);
    };

    private onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.onSubmit(e.currentTarget['searchInput'].value);
    };

    render(){
        const classNames = classnames('search-form', 'native-form');
        return <form onSubmit={this.onSubmit}  className={classNames} onChange={this.onFormChange} >
                <div className={'search'}>
                    <Input
                        name={'searchInput'}
                        type = {InputTypes.TEXT}
                        label = {'Search'}
                    />
                    <Button type={ButtonTypes.SUBMIT} classNames={'btn-search'} > <img src={search} alt="Search" className={'icon-search'} /></Button>
                </div>
                <Input
                    name={'filterInput'}
                    type = {InputTypes.TEXT}
                    label = {'Filter'}
                />
            </form>

    }
}