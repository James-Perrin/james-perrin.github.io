import React from 'react';
import Image from 'react-bootstrap/Image'
import waves from './img/wave.gif';
import notes from './img/notes.gif';


function Main(props) {

    const { view } = props;
    let mainView;

    if (view === 'Waves') {
        mainView = (
            <Image src={waves} alt="no Go" className="main" />
        );
    } else if (view === 'Notes') {
        mainView = (
            <Image src={notes} alt="no Go" className="main" />
        );
    }

    return (
        <div>
            {mainView}
        </div>
    );
}

export default Main;
