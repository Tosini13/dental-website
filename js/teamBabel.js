class MemberReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <p className="title"><span>{this.props.member.title}</span>{this.props.member.name}</p>
                <img src={this.props.member.getPhoto()} alt={this.props.member.name}></img>
                <p className="description">
                    {this.props.member.descr}
                </p>
            </li>
        );
    }
}

class TeamReact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.memebers = this.props.team.map((member) =>
            <MemberReact member={member} />
        );
        return (
            this.memebers
        );
    }
}

// ========================================

function createTeamReact(team) {
    ReactDOM.render(
        <TeamReact team={team} />,
        document.querySelector("#team ul")
    );
}