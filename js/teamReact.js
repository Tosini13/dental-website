class MemberReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("p", {
      className: "title"
    }, /*#__PURE__*/React.createElement("span", null, this.props.member.title), this.props.member.name), /*#__PURE__*/React.createElement("img", {
      src: this.props.member.getPhoto(),
      alt: this.props.member.name
    }), /*#__PURE__*/React.createElement("p", {
      className: "description"
    }, this.props.member.descr));
  }

}

class TeamReact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.memebers = this.props.team.map(member => /*#__PURE__*/React.createElement(MemberReact, {
      member: member
    }));
    return this.memebers;
  }

} // ========================================


function createTeamReact(team) {
  ReactDOM.render( /*#__PURE__*/React.createElement(TeamReact, {
    team: team
  }), document.querySelector("#team ul"));
}