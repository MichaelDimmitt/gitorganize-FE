import React from 'react';
export { HandleThing, RepoTitle, SeemsUnused }

const HandleThing = ({ info }) => (
  <span className="pinned-repository-handle js-pinned-repository-reorder float-left pr-2" title="Drag to reorder">
    <svg className="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16"
      aria-hidden="true">
      <path  d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" /></svg>
  </span>
)

const RepoTitle = ({ info:{ repo, user } }) => (
  <a href={`https://github.com/${user}/${repo}`} className="text-bold">
    <span className="repo js-repo" title={`${repo}`}>{`${repo}`}</span>
  </a>
)

const SeemsUnused = ({ info:{ repo } }) => (
  <div>

    <button type="button" className="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0" data-direction="up">
      <svg aria-label={`Move ${repo} up`} className="octicon octicon-chevron-up" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
        <path d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z" />
      </svg>
    </button>

    <button type="button" className="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0" data-direction="down">
      <svg aria-label={`Move ${repo} down`} className="octicon octicon-chevron-down" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
        <path  d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" />
      </svg>
    </button>

  </div>
)
