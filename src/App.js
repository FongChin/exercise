import React, { Component } from 'react';
import './App.css';
import RepoList from './RepoList';
import SortableIssueList from './SortableIssueList';
import { initializeAxio, getUserInfo, getAllRepos, getIssuesByRepo } from './utils';
import { arrayMove } from 'react-sortable-hoc';

const repos = [
  {
    "id": 16324843,
    "name": "Active-Record-Lite",
    "full_name": "FongChin/Active-Record-Lite",
    "owner": {
      "login": "FongChin",
      "id": 1923328,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1923328?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/FongChin",
      "html_url": "https://github.com/FongChin",
      "followers_url": "https://api.github.com/users/FongChin/followers",
      "following_url": "https://api.github.com/users/FongChin/following{/other_user}",
      "gists_url": "https://api.github.com/users/FongChin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/FongChin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/FongChin/subscriptions",
      "organizations_url": "https://api.github.com/users/FongChin/orgs",
      "repos_url": "https://api.github.com/users/FongChin/repos",
      "events_url": "https://api.github.com/users/FongChin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/FongChin/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/FongChin/Active-Record-Lite",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/FongChin/Active-Record-Lite",
    "forks_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/forks",
    "keys_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/teams",
    "hooks_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/hooks",
    "issue_events_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/issues/events{/number}",
    "events_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/events",
    "assignees_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/assignees{/user}",
    "branches_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/branches{/branch}",
    "tags_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/tags",
    "blobs_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/languages",
    "stargazers_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/stargazers",
    "contributors_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/contributors",
    "subscribers_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/subscribers",
    "subscription_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/subscription",
    "commits_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/contents/{+path}",
    "compare_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/merges",
    "archive_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/downloads",
    "issues_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/issues{/number}",
    "pulls_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/labels{/name}",
    "releases_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/releases{/id}",
    "deployments_url": "https://api.github.com/repos/FongChin/Active-Record-Lite/deployments",
    "created_at": "2014-01-28T20:27:52Z",
    "updated_at": "2014-01-28T20:29:58Z",
    "pushed_at": "2014-01-28T20:29:56Z",
    "git_url": "git://github.com/FongChin/Active-Record-Lite.git",
    "ssh_url": "git@github.com:FongChin/Active-Record-Lite.git",
    "clone_url": "https://github.com/FongChin/Active-Record-Lite.git",
    "svn_url": "https://github.com/FongChin/Active-Record-Lite",
    "homepage": null,
    "size": 128,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Ruby",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    }
  },
  {
    "id": 22796265,
    "name": "angular-hotkeys",
    "full_name": "FongChin/angular-hotkeys",
    "owner": {
      "login": "FongChin",
      "id": 1923328,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1923328?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/FongChin",
      "html_url": "https://github.com/FongChin",
      "followers_url": "https://api.github.com/users/FongChin/followers",
      "following_url": "https://api.github.com/users/FongChin/following{/other_user}",
      "gists_url": "https://api.github.com/users/FongChin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/FongChin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/FongChin/subscriptions",
      "organizations_url": "https://api.github.com/users/FongChin/orgs",
      "repos_url": "https://api.github.com/users/FongChin/repos",
      "events_url": "https://api.github.com/users/FongChin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/FongChin/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/FongChin/angular-hotkeys",
    "description": "Configuration-centric keyboard shortcuts for your Angular apps.    ",
    "fork": true,
    "url": "https://api.github.com/repos/FongChin/angular-hotkeys",
    "forks_url": "https://api.github.com/repos/FongChin/angular-hotkeys/forks",
    "keys_url": "https://api.github.com/repos/FongChin/angular-hotkeys/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/FongChin/angular-hotkeys/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/FongChin/angular-hotkeys/teams",
    "hooks_url": "https://api.github.com/repos/FongChin/angular-hotkeys/hooks",
    "issue_events_url": "https://api.github.com/repos/FongChin/angular-hotkeys/issues/events{/number}",
    "events_url": "https://api.github.com/repos/FongChin/angular-hotkeys/events",
    "assignees_url": "https://api.github.com/repos/FongChin/angular-hotkeys/assignees{/user}",
    "branches_url": "https://api.github.com/repos/FongChin/angular-hotkeys/branches{/branch}",
    "tags_url": "https://api.github.com/repos/FongChin/angular-hotkeys/tags",
    "blobs_url": "https://api.github.com/repos/FongChin/angular-hotkeys/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/FongChin/angular-hotkeys/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/FongChin/angular-hotkeys/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/FongChin/angular-hotkeys/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/FongChin/angular-hotkeys/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/FongChin/angular-hotkeys/languages",
    "stargazers_url": "https://api.github.com/repos/FongChin/angular-hotkeys/stargazers",
    "contributors_url": "https://api.github.com/repos/FongChin/angular-hotkeys/contributors",
    "subscribers_url": "https://api.github.com/repos/FongChin/angular-hotkeys/subscribers",
    "subscription_url": "https://api.github.com/repos/FongChin/angular-hotkeys/subscription",
    "commits_url": "https://api.github.com/repos/FongChin/angular-hotkeys/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/FongChin/angular-hotkeys/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/FongChin/angular-hotkeys/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/FongChin/angular-hotkeys/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/FongChin/angular-hotkeys/contents/{+path}",
    "compare_url": "https://api.github.com/repos/FongChin/angular-hotkeys/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/FongChin/angular-hotkeys/merges",
    "archive_url": "https://api.github.com/repos/FongChin/angular-hotkeys/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/FongChin/angular-hotkeys/downloads",
    "issues_url": "https://api.github.com/repos/FongChin/angular-hotkeys/issues{/number}",
    "pulls_url": "https://api.github.com/repos/FongChin/angular-hotkeys/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/FongChin/angular-hotkeys/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/FongChin/angular-hotkeys/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/FongChin/angular-hotkeys/labels{/name}",
    "releases_url": "https://api.github.com/repos/FongChin/angular-hotkeys/releases{/id}",
    "deployments_url": "https://api.github.com/repos/FongChin/angular-hotkeys/deployments",
    "created_at": "2014-08-09T22:13:22Z",
    "updated_at": "2014-08-09T22:48:41Z",
    "pushed_at": "2014-08-09T22:48:41Z",
    "git_url": "git://github.com/FongChin/angular-hotkeys.git",
    "ssh_url": "git@github.com:FongChin/angular-hotkeys.git",
    "clone_url": "https://github.com/FongChin/angular-hotkeys.git",
    "svn_url": "https://github.com/FongChin/angular-hotkeys",
    "homepage": "http://chieffancypants.github.io/angular-hotkeys/",
    "size": 298,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    }
  },
  {
    "id": 15598735,
    "name": "Asteroids",
    "full_name": "FongChin/Asteroids",
    "owner": {
      "login": "FongChin",
      "id": 1923328,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1923328?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/FongChin",
      "html_url": "https://github.com/FongChin",
      "followers_url": "https://api.github.com/users/FongChin/followers",
      "following_url": "https://api.github.com/users/FongChin/following{/other_user}",
      "gists_url": "https://api.github.com/users/FongChin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/FongChin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/FongChin/subscriptions",
      "organizations_url": "https://api.github.com/users/FongChin/orgs",
      "repos_url": "https://api.github.com/users/FongChin/repos",
      "events_url": "https://api.github.com/users/FongChin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/FongChin/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/FongChin/Asteroids",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/FongChin/Asteroids",
    "forks_url": "https://api.github.com/repos/FongChin/Asteroids/forks",
    "keys_url": "https://api.github.com/repos/FongChin/Asteroids/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/FongChin/Asteroids/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/FongChin/Asteroids/teams",
    "hooks_url": "https://api.github.com/repos/FongChin/Asteroids/hooks",
    "issue_events_url": "https://api.github.com/repos/FongChin/Asteroids/issues/events{/number}",
    "events_url": "https://api.github.com/repos/FongChin/Asteroids/events",
    "assignees_url": "https://api.github.com/repos/FongChin/Asteroids/assignees{/user}",
    "branches_url": "https://api.github.com/repos/FongChin/Asteroids/branches{/branch}",
    "tags_url": "https://api.github.com/repos/FongChin/Asteroids/tags",
    "blobs_url": "https://api.github.com/repos/FongChin/Asteroids/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/FongChin/Asteroids/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/FongChin/Asteroids/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/FongChin/Asteroids/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/FongChin/Asteroids/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/FongChin/Asteroids/languages",
    "stargazers_url": "https://api.github.com/repos/FongChin/Asteroids/stargazers",
    "contributors_url": "https://api.github.com/repos/FongChin/Asteroids/contributors",
    "subscribers_url": "https://api.github.com/repos/FongChin/Asteroids/subscribers",
    "subscription_url": "https://api.github.com/repos/FongChin/Asteroids/subscription",
    "commits_url": "https://api.github.com/repos/FongChin/Asteroids/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/FongChin/Asteroids/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/FongChin/Asteroids/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/FongChin/Asteroids/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/FongChin/Asteroids/contents/{+path}",
    "compare_url": "https://api.github.com/repos/FongChin/Asteroids/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/FongChin/Asteroids/merges",
    "archive_url": "https://api.github.com/repos/FongChin/Asteroids/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/FongChin/Asteroids/downloads",
    "issues_url": "https://api.github.com/repos/FongChin/Asteroids/issues{/number}",
    "pulls_url": "https://api.github.com/repos/FongChin/Asteroids/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/FongChin/Asteroids/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/FongChin/Asteroids/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/FongChin/Asteroids/labels{/name}",
    "releases_url": "https://api.github.com/repos/FongChin/Asteroids/releases{/id}",
    "deployments_url": "https://api.github.com/repos/FongChin/Asteroids/deployments",
    "created_at": "2014-01-03T01:57:41Z",
    "updated_at": "2014-01-03T02:00:21Z",
    "pushed_at": "2014-01-03T02:00:20Z",
    "git_url": "git://github.com/FongChin/Asteroids.git",
    "ssh_url": "git@github.com:FongChin/Asteroids.git",
    "clone_url": "https://github.com/FongChin/Asteroids.git",
    "svn_url": "https://github.com/FongChin/Asteroids",
    "homepage": null,
    "size": 104,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    }
  },
  {
    "id": 15878829,
    "name": "ChatApp",
    "full_name": "FongChin/ChatApp",
    "owner": {
      "login": "FongChin",
      "id": 1923328,
      "avatar_url": "https://avatars3.githubusercontent.com/u/1923328?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/FongChin",
      "html_url": "https://github.com/FongChin",
      "followers_url": "https://api.github.com/users/FongChin/followers",
      "following_url": "https://api.github.com/users/FongChin/following{/other_user}",
      "gists_url": "https://api.github.com/users/FongChin/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/FongChin/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/FongChin/subscriptions",
      "organizations_url": "https://api.github.com/users/FongChin/orgs",
      "repos_url": "https://api.github.com/users/FongChin/repos",
      "events_url": "https://api.github.com/users/FongChin/events{/privacy}",
      "received_events_url": "https://api.github.com/users/FongChin/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/FongChin/ChatApp",
    "description": "A simple Chat Application written in Node",
    "fork": false,
    "url": "https://api.github.com/repos/FongChin/ChatApp",
    "forks_url": "https://api.github.com/repos/FongChin/ChatApp/forks",
    "keys_url": "https://api.github.com/repos/FongChin/ChatApp/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/FongChin/ChatApp/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/FongChin/ChatApp/teams",
    "hooks_url": "https://api.github.com/repos/FongChin/ChatApp/hooks",
    "issue_events_url": "https://api.github.com/repos/FongChin/ChatApp/issues/events{/number}",
    "events_url": "https://api.github.com/repos/FongChin/ChatApp/events",
    "assignees_url": "https://api.github.com/repos/FongChin/ChatApp/assignees{/user}",
    "branches_url": "https://api.github.com/repos/FongChin/ChatApp/branches{/branch}",
    "tags_url": "https://api.github.com/repos/FongChin/ChatApp/tags",
    "blobs_url": "https://api.github.com/repos/FongChin/ChatApp/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/FongChin/ChatApp/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/FongChin/ChatApp/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/FongChin/ChatApp/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/FongChin/ChatApp/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/FongChin/ChatApp/languages",
    "stargazers_url": "https://api.github.com/repos/FongChin/ChatApp/stargazers",
    "contributors_url": "https://api.github.com/repos/FongChin/ChatApp/contributors",
    "subscribers_url": "https://api.github.com/repos/FongChin/ChatApp/subscribers",
    "subscription_url": "https://api.github.com/repos/FongChin/ChatApp/subscription",
    "commits_url": "https://api.github.com/repos/FongChin/ChatApp/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/FongChin/ChatApp/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/FongChin/ChatApp/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/FongChin/ChatApp/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/FongChin/ChatApp/contents/{+path}",
    "compare_url": "https://api.github.com/repos/FongChin/ChatApp/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/FongChin/ChatApp/merges",
    "archive_url": "https://api.github.com/repos/FongChin/ChatApp/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/FongChin/ChatApp/downloads",
    "issues_url": "https://api.github.com/repos/FongChin/ChatApp/issues{/number}",
    "pulls_url": "https://api.github.com/repos/FongChin/ChatApp/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/FongChin/ChatApp/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/FongChin/ChatApp/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/FongChin/ChatApp/labels{/name}",
    "releases_url": "https://api.github.com/repos/FongChin/ChatApp/releases{/id}",
    "deployments_url": "https://api.github.com/repos/FongChin/ChatApp/deployments",
    "created_at": "2014-01-13T19:21:39Z",
    "updated_at": "2014-01-14T02:23:13Z",
    "pushed_at": "2014-01-14T02:23:12Z",
    "git_url": "git://github.com/FongChin/ChatApp.git",
    "ssh_url": "git@github.com:FongChin/ChatApp.git",
    "clone_url": "https://github.com/FongChin/ChatApp.git",
    "svn_url": "https://github.com/FongChin/ChatApp",
    "homepage": null,
    "size": 140,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    }
  },
];

const issues = [
  {
    id: '1',
    "number": 1347,
    "state": "open",
    "title": "Found a bug",
    "body": "I'm having a problem with this.",
    "user": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat"
    }
  },
  {
    'id': 2,
    "number": 1348,
    "state": "open",
    "title": "Found another bug",
    "body": "I'm having a problem with this.",
    "user": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat"
    }
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    // const token = window.prompt('Please enter your github token');
    const token = '115ee16bd053fc17a8ad83f798c31c5d46b4a3bf';
    
    initializeAxio(token);
    // getUserInfo().then((user) => {
    //   getAllRepos(user.login).then((repos) => {
    //     this.setState({
    //       repos: repos,
    //       user: user
    //     });
    //   });
    // });

    // this.state = { token: token, repos: [] };

    this.state = { token: token, repos: repos, user: { login: 'FongChin' }, issues: []};
  }
  
  repoOnClick(repoName) {
    // getIssuesByRepo(this.state.user.login, repoName).then((issues) => {
    //   this.setState({ issues: issues });
    // });
    this.setState({ issues: issues });
  }
  
  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      issues: arrayMove(this.state.issues, oldIndex, newIndex)
    });
  }

  render() {
    let issueList;
    if (this.state.issues.length) {
      issueList = (
        <div className="col-8">
          <SortableIssueList issues={this.state.issues} onSortEnd={this.onSortEnd.bind(this)} />
        </div>
      );
    }
    return (
      <div className="main">
        <div className="nav"></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <RepoList repos={this.state.repos} repoOnClick={this.repoOnClick.bind(this)} />
              </div>
              {issueList}
            </div>
          </div>
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { tasks: [], disableSave: true };
//     getAllTasks()
//       .then((response) => {
//         this.setState({
//           tasks: response.tasks || []
//         });
//       })
//       .catch(() => {
//         this.setState({showErrorBanner: true});
//       });
//   }
  
//   addTask() {
//     let value = window.prompt('Add a new task');
//     if (!(value && value.trim())) return;
//     const length = this.state.tasks.length;
//     const newTask = {
//       id: length + 1,
//       text: value.trim()
//     };
//     this.state.tasks.unshift(newTask);
//     this.setState({tasks: this.state.tasks, disableSave: false});
//   }

//   saveTasks() {
//     return saveAllTasks(this.state.tasks)
//       .then((response) => {
//         this.setState({showSuccessBanner: true, disableSave: true});
//         this._hideBannerInTwoSeconds();
//       })
//       .catch(() => {
//         this.setState({showErrorBanner: true});
//         this._hideBannerInTwoSeconds();
//       });
//   }

//   onSortEnd({oldIndex, newIndex}) {
//     this.setState({
//       tasks: arrayMove(this.state.tasks, oldIndex, newIndex),
//       disableSave: false
//     });
//   }

//   _hideBannerInTwoSeconds() {
//     setTimeout(() => {
//       this.hideBanner();
//     }, 2000);
//   }

//   hideBanner() {
//     this.setState({
//       showErrorBanner: false,
//       showSuccessBanner: false
//     });
//   }

//   deleteTask(taskIndex) {
//     this.state.tasks.splice(taskIndex, 1);
//     this.setState({ tasks: this.state.tasks, disableSave: false });
//   }

//   render() {
//     let banner;
//     if (this.state.showErrorBanner) {
//       banner = <Banner message="Errors happened while saving or fetching tasks." type="error" hideBanner={this.hideBanner.bind(this)} />
//     }
//     else if (this.state.showSuccessBanner) {
//       banner = <Banner message="Tasks saved successfully" hideBanner={this.hideBanner.bind(this)} />
//     }
//     return ( 
//       <div className="main">
//         <div className="nav"></div>
//         <div className="container">
//           <div className="header-container">
//             <h2 className="main-header">Tasks</h2>
//             <button type="button" disabled={this.state.disableSave} className="btn save-task-btn" onClick={this.saveTasks.bind(this)}>Save</button>
//             <button type="button" className="btn add-task-btn" onClick={this.addTask.bind(this)}>Add To Do</button>
//           </div>
//           {banner}
//           <SortableTaskList 
//             tasks={this.state.tasks} 
//             onSortEnd={this.onSortEnd.bind(this)}
//             deleteTask={this.deleteTask.bind(this)} />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
