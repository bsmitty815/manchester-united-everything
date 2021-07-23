import React from "react"
import {NavLink} from "react-router-dom"
import { Button, Segment } from 'semantic-ui-react'

function NavBar() {


    return (
        <div>
            <Segment>
            <NavLink to="/Home">

                    <Button inverted color='red'>
                        Home
                    </Button>

            </NavLink>
            <NavLink to="/PlayerProfile">

                    <Button inverted color='red'>
                        Players
                    </Button>

            </NavLink>
            <NavLink  to="/CurrentStats">

                    <Button inverted color='red'>
                    2021/22 Stats
                    </Button>

            </NavLink>
            <NavLink to="/CurrentFixtures">

                <Button inverted color='red'>
                    Fixtures
                </Button>
                
            </NavLink>
            <NavLink to="/PlayerQuotes">

                    <Button inverted color='red'>
                    Quotes
                    </Button>

            </NavLink>
            <NavLink to="/AllTimeStats">

                    <Button inverted color='red'>
                    All EPL Stats
                    </Button>

            </NavLink>
            </Segment>
        </div>
    )



}


export default NavBar