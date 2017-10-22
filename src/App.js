import React, { Component } from 'react';
import './App.css';
import RepoList from './RepoList';
import SortableIssueList from './SortableIssueList';
import { initializeAxio, getUserInfo, getAllRepos, getIssuesByRepo } from './utils';
import { arrayMove } from 'react-sortable-hoc';

class App extends Component {
  constructor(props) {
    super(props);
    // const token = window.prompt('Please enter your github token');
    const token = '0409847e48d2f0831096eeabb3da707164bbd53e';
    
    initializeAxio(token);
    getUserInfo().then((user) => {
      getAllRepos(user.login).then((repos) => {
        this.setState({
          repos: repos,
          user: user
        });
      });
    });

    this.state = { token: token, user: {}, repos: [], issues: [], activeRepo: {} };
  }
  
  _saveIssueIdsInLocalStorage(issues) {
    const repo = this.state.activeRepo;
    const issueIds = issues.map((issue) => { return issue.id; });
    localStorage.setItem(repo.id, issueIds);
  }

  _sortIssues(repo, issues) {
    if (!localStorage.getItem(repo.id)) {
      this._saveIssueIdsInLocalStorage(issues);
    }
    else {
      const savedIssueIds = localStorage.getItem(repo.id).split(',').map((id) => { return Number(id) });
      let savedIssues = [];
      let newIssues = [];

      savedIssueIds.forEach((id) => {
        let issue = issues.find((issue) => {
          return issue.id === id;
        });
        if (issue) savedIssues.push(issue);
      });
      issues.forEach((issue) => {
        if (!savedIssueIds.includes(issue.id)) {
          newIssues.push(issue);
        }
      });

      issues = savedIssues.concat(newIssues);
    }
    return issues;
  }

  repoOnClick(repo) {
    getIssuesByRepo(this.state.user.login, repo.name).then((issues) => {
      this.setState({ activeRepo: repo, issues: this._sortIssues(repo, issues) });
    });
  }
  
  onSortEnd({repo, oldIndex, newIndex}) {
    const issues = arrayMove(this.state.issues, oldIndex, newIndex);
    this._saveIssueIdsInLocalStorage(issues);
    this.setState({
      issues: issues
    });
  }

  render() {
    let repoListClass = 'repoList';
    let issueList;
    if (this.state.issues.length) {
      issueList = (
        <div className="issueList">
          <SortableIssueList issues={this.state.issues} onSortEnd={this.onSortEnd.bind(this)} />
        </div>
      );
      repoListClass += ' repo-list--small';
    }
    
    
    return (
      <div className="main">
        <div className="nav"><h3 className="header"><i className="fa fa-github"></i> {this.state.user.login} </h3></div>
        <div className="container-fluid">
          <div className={repoListClass}>
            <RepoList activeRepo={this.state.activeRepo} repos={this.state.repos} repoOnClick={this.repoOnClick.bind(this)} />
          </div>
          {issueList}
        </div>
      </div>
    );
  }
}

export default App;
