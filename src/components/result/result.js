import React, {Component} from 'react';
import Paginator from '../paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {setMainCard} from '../../actions';

import './result.css';

class Result extends Component {
    render() {
        return(
            <div className="result">
                <ul className="headerResult">
                    <li className="name">
                        Название
                    </li>
                    <li className="stars">
                        Звёзд
                    </li>
                    <li className="commit">
                        Последний комит
                    </li>
                    <li className="link">
                        Ссылка:
                    </li>
                </ul>
                <ul>
                    {this.props.content.map(data => (
                            <li key={data.id} className="line" onClick={()=>this.props.setMainCard(data.id)}>
                                <ul className="bodyResult">
                                    <Link to = "/card">
                                        <li className="name">
                                            {data.name}
                                        </li>
                                    </Link>
                                    <li className="stars">
                                        <span className="starSmall">&#9733;</span>{data.stars}
                                    </li>
                                    <li className="commit">
                                        {data.lastCommit}
                                    </li>
                                    <li className="link">
                                        <a href={data.urlRepositories} target="_blank">https://github.com...</a>
                                    </li>
                                </ul>
                            </li>
                    ))}
                </ul>
                <div className="paginatorResult">
                    <Paginator/>
                </div>
            </div>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        content: state.content,
        mainCard: state.mainCard
    }
}

const mapDispatchToProps = {
    setMainCard
}


export default connect(mapStateToProps, mapDispatchToProps)(Result);
