import React from "react"
import {NavLink} from "react-router-dom"
import { Button, Segment } from 'semantic-ui-react'

function NavBar() {


    return (
        <div>
            <Segment>
            <NavLink to="/Home">
                <p>
                    <Button inverted color='red'>
                        Home
                    </Button>
                </p>
            </NavLink>
            <NavLink to="/PlayerProfile">
                <p>
                    <Button inverted color='red'>
                        Players
                    </Button>
                </p>
            </NavLink>
            <NavLink  to="/CurrentStats">
                <p>
                    <Button inverted color='red'>
                    2021/22 Stats
                    </Button>
                </p>
            </NavLink>
            <NavLink to="/PlayerQuotes">
                <p>
                    <Button inverted color='red'>
                    Quotes
                    </Button>
                </p>
            </NavLink>
            <NavLink to="/AllTimeStats">
                <p>
                    <Button inverted color='red'>
                    All EPL Stats
                    </Button>
                </p>
            </NavLink>
            </Segment>
        </div>
    )



}


export default NavBar