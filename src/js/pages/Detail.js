import React from "react";
import ajax from 'superagent';
import { Link } from 'react-router-dom';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'commits',
      commits: [],
      forks: [],
      pulls: [],
    };
  }

  componentWillMount() {
    this.fetchFeed('commits');
    this.fetchFeed('forks');
    this.fetchFeed('pulls');
  }

  fetchFeed(type) {
    const baseUrl = 'https://api.github.com/repos/facebook';

    ajax.get(`${baseUrl}/${this.props.match.params.repo}/${type}`)
      .end((error, response) => {
        if (!error && response) {
          this.setState({ [type]: response.body });
        } else {
          console.log(`Error fetching ${type}`, error);
        }
      });

  }

  selectMode(mode) {
    this.setState({ mode });
  }

  renderCommits() {
    return (
      <div>
        {this.state.commits.map((commit, index) => {
          const author = commit.author ? commit.author.login : 'Anonymous';

          return (<p key={index}>
            <strong><User name={author} /></strong>:
            <a href={commit.html_url}>{commit.commit.message}</a>.
            </p>);
        })}
      </div>
    );
  }

  renderForks() {
    return (
      <div>
        {this.state.forks.map((fork, index) => {
          const owner = fork.owner ? fork.owner.login : 'Anonymous';

          return (<p key={index}>
            <strong><User name={owner} /></strong>:
            <a href={fork.html_url}>{fork.html_url}</a> at {fork.created_at}.
            </p>);
        })}
      </div>
    );
  }

  renderPulls() {
    return (
      <div>
        {this.state.pulls.map((pull, index) => {
          const user = pull.user ? pull.user.login : 'Anonymous';

          return (<p key={index}>
            <strong><User name={user} /></strong>:
            <a href={pull.html_url}>{pull.body}</a>.
            </p>);
        })}
      </div>
    );
  }

  render() {
    let content;

    if (this.state.mode === 'commits') {
      content = this.renderCommits();
    } else if (this.state.mode === 'forks') {
      content = this.renderForks();
    } else {
      content = this.renderPulls();
    }

    return (<div>
      <button onClick={this.selectMode.bind(this, 'commits')}>Show Commits</button>
      <button onClick={this.selectMode.bind(this, 'forks')}>Show Forks</button>
      <button onClick={this.selectMode.bind(this, 'pulls')}> Show Pulls</button>
      {content}
    </div>);
  }
}


const User = ({ name }) => {
  let url;
  url = `/user/${name}`;
  console.log(url);
  return <Link to={url}>{name}</Link>;
}

export default Detail;