class ServiceReact extends React.Component{constructor(props){super(props);this.showDescription=this.showDescription.bind(this);this.hideDescription=this.hideDescription.bind(this);this.toggleDescription=this.toggleDescription.bind(this);this.state={desc:0};}
toggleDescription(){if(this.state.desc){this.setState({desc:0});}else{this.setState({desc:1});}}
showDescription(){if(screen.width>800){this.setState({desc:1});}}
hideDescription(){this.setState({desc:0});}
render(){let desc="";if(this.state.desc){desc="serviceOpened";}
return React.createElement("li",{className:desc},React.createElement("h3",{className:"serviceTitle"},this.props.service.name),React.createElement("div",{onMouseOver:this.showDescription,onMouseLeave:this.hideDescription,onClick:this.showDescription,onClick:this.toggleDescription},React.createElement("img",{src:this.props.service.getPhoto(),alt:this.props.service.name}),React.createElement("p",{className:"serviceDescription"},this.props.service.descr),React.createElement("a",{className:"btn"},"Read more")));}}
class ServicesReact extends React.Component{constructor(props){super(props);}
render(){this.services=this.props.services.map(service=>React.createElement(ServiceReact,{service:service}));return this.services;}}
function createServiceReact(services){console.log(document.querySelector("#team ul"));ReactDOM.render(React.createElement(ServicesReact,{services:services}),document.querySelector("#service ul"));}