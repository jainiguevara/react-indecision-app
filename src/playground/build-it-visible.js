class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            details: 'Hello world!'
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: prevState.visibility ? false : true 
            }
        });
    }
    render() {
        const config = {
            title: 'Visibility toggle'
        };
        return (
            <div>
                <h1>{config.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                {!this.state.visibility ? 'Show Details' : 'Hide Details'}</button>
                {this.state.visibility === true && (
                    <div>
                        <p>{this.state.details}</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));