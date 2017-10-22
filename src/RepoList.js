import React, { Component } from 'react';


const Repo = (({ repo, repoOnClick }) => {
	const { name, open_issues_count } = repo;
	return (
		<li className="list-item" onClick={repoOnClick}>
			{name}: {open_issues_count}
		</li>
	)
});

class RepoList extends Component {
	constructor(props) {
		super(props);
	}

	repoOnClick(repoName) {
		this.props.repoOnClick(repoName);
	}

	render() {
		let repoList = this.props.repos.map((repo) => {
			return (<Repo repo={repo} repoOnClick={this.repoOnClick.bind(this, repo.name)} key={'repo-' + repo.id}/>);
		});
		return (<ul className="list-wrapper">{repoList}</ul>);
	}
}

export default RepoList;