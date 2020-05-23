class ServiceReact extends React.Component {
    constructor(props) {
        super(props);
        this.showDescription = this.showDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
        this.toggleDescription = this.toggleDescription.bind(this);
        this.state = {
            desc: 0
        }
    }

    toggleDescription() {
        if (this.state.desc) {
            this.setState({ desc: 0 });
        } else {
            this.setState({ desc: 1 });
        }
    }

    showDescription() {
        if (screen.width > 800) {
            this.setState({ desc: 1 });
        }
    }

    hideDescription() {
        this.setState({ desc: 0 });
    }

    render() {
        let desc = "";
        if (this.state.desc) {
            desc = "serviceOpened";
        }
        return (
            <li className={desc}>
                <h3 className="serviceTitle">{this.props.service.name}</h3>
                <div onMouseOver={this.showDescription} onMouseLeave={this.hideDescription} onClick={this.showDescription} onClick={this.toggleDescription}>
                    <img src={this.props.service.getPhoto()} alt={this.props.service.name}></img>
                    <p className="serviceDescription">
                        {this.props.service.descr}
                    </p>
                    <a className="btn">Read more</a>
                </div>
            </li>
        );
    }
}

class ServicesReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.services = this.props.services.map((service) =>
            <ServiceReact service={service} />
        );
        return (
            this.services
        );
    }
}

// ========================================

function createServiceReact(services) {
    console.log(document.querySelector("#team ul"));
    ReactDOM.render(
        <ServicesReact services={services} />,
        document.querySelector("#service ul")
    );
}