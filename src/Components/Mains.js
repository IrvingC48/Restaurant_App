import React from 'react';

const Mains = (props) => {
    return (
        <div className="level-item">
            <button className="button is-small is-medium-tablet is-info is-outlined is-rounded" onClick={props.onClicked}>
                <strong className="is-size-4 is-size-7-mobile">{props.main}</strong>
            </button>
        </div>
    )
}

export default Mains
