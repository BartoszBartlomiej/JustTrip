import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        const linkStyle = {
            color: 'green'
        };

        return (
            <div className='appNavigation'>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to='/app/newTrip' activeStyle={linkStyle}><FontAwesomeIcon icon='globe-americas'/> STRONA GŁÓWNA</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/tripPlan' activeStyle={linkStyle}><FontAwesomeIcon icon='list-ul'/> PLAN
                                PODRÓŻY</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/backpack' activeStyle={linkStyle}><FontAwesomeIcon icon='hiking'/> PLECAK</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app/newTrip/diary' activeStyle={linkStyle}><FontAwesomeIcon icon='book'/> DZIENNIK
                                POKŁADOWY</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}