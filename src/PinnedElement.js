import React from 'react';
const { HandleThing, RepoTitle, SeemsUnused } = require('./lineOneDependencies.js')
export { PinnedElement }

const LineOneHandleAndTitle = ({}) => (
  <span className="d-block position-relative">
    <input type="hidden" name="repo_ids[]" id="pinned-repo-reorder-147890778" value="147890778" className="form-control" />
    <HandleThing />
    <RepoTitle user="MichaelDimmitt" repo="ERRORSCREAM"/>
    <SeemsUnused/>
  </span>
)

const LineTwoDescription = ({name}) => (
  <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
    stdout to error
  </p>
)

const LineThreeLanguageAndStar = ({name}) => (
  <p className="mb-0 f6 text-gray">
    <span className="repo-language-color pinned-repo-meta" style={{backgroundColor:"#89e051"}}></span>
    Shell
    <a href="/MichaelDimmitt/ERRORSCREAM/stargazers" className="pinned-repo-meta muted-link">
      <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
        height="16" role="img">
        <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
      1
    </a>
  </p>
)

const PinnedElement = ({}) => (
  <div className="pinned-repo-item-content">
    <LineOneHandleAndTitle/>
    <LineTwoDescription/>
    <LineThreeLanguageAndStar/>
  </div>
)
