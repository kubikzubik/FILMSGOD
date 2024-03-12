import React from 'react';
import { Header } from './layout/header';
import { Main } from './layout/main';
import { Footer } from './layout/footer';


function App() {
    return(
        <div className='App'>
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        </div>
    )
}
export default App;
