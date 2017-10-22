import React, { Component } from 'react';

const Repo = (({ repo, isActive, repoOnClick, clickable }) => {
	const { name, open_issues_count } = repo;
	let classes = 'list-item list-item--repo';
	classes += (isActive) ? ' active' : '';
	classes += (clickable) ? '' : ' unclickable';
	return (
		<li className={classes} onClick={repoOnClick}>
			<h3>{name}<span className="list-item--text float-right mt-2">Issue Count: {open_issues_count}</span></h3>
		</li>
	)
});

class RepoList extends Component {
	repoOnClick(repo) {
		this.props.repoOnClick(repo);
		if (repo.open_issues_count > 0) {
			this.props.repoOnClick(repo);
		}
	}

	render() {
		let repoList = this.props.repos.map((repo) => {
			return (
				<Repo repo={repo} 
					repoOnClick={this.repoOnClick.bind(this, repo)}
					isActive={this.props.activeRepo.id === repo.id}
					clickable={repo.open_issues_count > 0}
					key={'repo-' + repo.id}/>
			);
		});
		return (<ul className="list-wrapper">{repoList}</ul>);
	}
}

export default RepoList;