import React, { Component } from 'react';

function MainPage({ location, history }) {
    return (
        <div id="Main" className="MainPage">
            <p>Welcome to Music!</p>
            <button>logout</button>
        </div>
    );
}

export default MainPage;