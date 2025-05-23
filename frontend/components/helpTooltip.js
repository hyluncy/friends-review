import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import { OverlayTrigger, Tooltip } from 'react-bootstrap'; 

export default function HelpTooltip({helpMessage }) {
    console.log(helpMessage); 
    return (
        <OverlayTrigger 
            placement='right'
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id='tooltip-help'>{helpMessage}</Tooltip>}>
                <img src='/helpIcon.svg' alt='Help Icon' style={{ cursor: 'pointer', width: '15px', height: '15px' }}/>
        </OverlayTrigger>
    )
}

