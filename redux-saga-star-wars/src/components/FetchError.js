import React from 'react';

const FetchError = ({message , onRetry }) => (

    <div className="panel panel-primary">
        <div className="panel-heading">Error:</div>
        <div className="panel-body">
            <h5> Message: {message} </h5>
            <button type="button" className="btn btn-primary" onClick={onRetry}>Retry</button>
        </div>
    </div>
);

export default FetchError;
