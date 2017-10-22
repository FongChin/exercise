import React, { Component } from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';

const SortableIssue = SortableElement(({ issue }) => {
	const { title, body, user } = issue;
	return (
		<li className="list-item list-item--issue">
			<div className="row">
				<div className="col-2">
					<a href={user.url}><img className="gh-avatar" src={user.avatar_url} alt={user.login} /></a>
				</div>
				<div className="col">
					<h3>{title} <span className="list-item--text">by {user.login}</span><span className="list-item--text float-right">#{issue.number}</span></h3>
					{body}
				</div>
			</div>
		</li>
	)
});

const SortableList = SortableContainer(({ issues, isActive }) => {
	let wrapperClass = 'list-wrapper';
	wrapperClass += isActive ? ' active' : '';
	let issueList = issues.map((issue, index) => {
		return (<SortableIssue issue={issue} index={index} key={'issue-' + issue.id}/>);
	});
	return (<ul className={wrapperClass}>{issueList}</ul>);
});


class SortableIssueList extends Component {
	
	  constructor(props) {
		super(props);
		this.state = { isActive: false };
	  }
	
	  onSortStart() {
		this.setState({ isActive: true });
	  }
	
	  onSortEnd() {
		this.setState({ isActive: false });
		this.props.onSortEnd(...arguments);
	  }
	
	  render() {
			return (
				<SortableList ref="wrapper" issues={this.props.issues} 
					onSortStart={this.onSortStart.bind(this)}
					onSortEnd={this.onSortEnd.bind(this)} 
					isActive={this.state.isActive} />
			);
	  }
	};
	
export default SortableIssueList;