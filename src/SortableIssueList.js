import React, { Component } from 'react';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';

const SortableIssue = SortableElement(({ issue }) => {
	const { title, body, user } = issue;
	return (
		<li className="list-item list-item--issue">
			<div>{title} <span>by {user.login}</span></div>
			{body}
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