import React from 'react'
import {Header} from '../components';


export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo/>
                <Header.ButtonLink>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}