class MemberReact extends React.Component{constructor(props){super(props);}
render(){return React.createElement("li",null,React.createElement("p",{className:"title"},React.createElement("span",null,this.props.member.title),this.props.member.name),React.createElement("img",{src:this.props.member.getPhoto(),alt:this.props.member.name}),React.createElement("p",{className:"description"},this.props.member.descr));}}
class TeamReact extends React.Component{constructor(props){super(props);}
render(){this.memebers=this.props.team.map(member=>React.createElement(MemberReact,{member:member}));return this.memebers;}}
function createTeamReact(team){ReactDOM.render(React.createElement(TeamReact,{team:team}),document.querySelector("#team ul"));}