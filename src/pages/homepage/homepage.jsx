import React from 'react';
import { HomePageContainer } from './homepage.styles.jsx';
import Directory from '../../components/directory/directory.jsx';


export const HomePage = () => {
    return(
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    );
}