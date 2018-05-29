class toggleVisibility extends React.Component() {
    render() {
        
    }
}

const app = {
    title: 'Visibility toggle',
    details: 'Hello world!',
    visibility: false
};

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
    app.visibility = app.visibility ? false : true;
    render();
};

const render = () => {
    const component = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{!app.visibility ? 'Show Details' : 'Hide Details'}</button>
            {app.visibility === true && (
                <div>
                    <p>{app.details}</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(component, appRoot);
};

render();