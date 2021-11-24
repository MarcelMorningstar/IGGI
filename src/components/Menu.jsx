import React from 'react';

function Meal() {
    return (
        <h1>Meal</h1>
    );
}

function Drinks() {
    return (
        <h1>Drinks</h1>
    );
}

function Cocktails() {
    return (
        <h1>Cocktails</h1>
    );
}

function Desserts() {
    return (
        <h1>Desserts</h1>
    );
}

class Menu extends React.Component {    
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            view : 'view1'
        };
    }

    handleClick = view => event => {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent,
            view
        }));
    }

    render() {
        return (
            <div id="menu">
                <div className="menu-header">
                    <h1>{this.props.title}</h1>
                    <hr />
                    <div className="menu-btn">
                        <button id="meal" onClick={this.handleClick('view1')}>Meal</button>
                        <button id="drinks" onClick={this.handleClick('view2')}>Drinks</button>
                        <button id="cocktails" onClick={this.handleClick('view3')}>Cocktails</button>
                        <button id="dessert" onClick={this.handleClick('view4')}>Desserts</button>
                    </div>
                </div>
                <div className="menu-content">
                    {this.state.view === 'view1' && <Meal />}
                    {this.state.view === 'view2' && <Drinks />}
                    {this.state.view === 'view3' && <Cocktails />}
                    {this.state.view === 'view4' && <Desserts />}
                </div>
            </div>
        );
    }
}

export default Menu;
