import React from 'react';
const { HandleThing, RepoTitle, SeemsUnused } = require('./lineOneDependencies.js')
export { PinnedElement }

const LineOneHandleAndTitle = ({ info:{ repo, user } }) => (
  <span className="d-block position-relative">
    <input type="hidden" name="repo_ids[]" id="pinned-repo-reorder-147890778" value="147890778" className="form-control" />
    <HandleThing /> {/* At moment seems it does not take data. May need to remove superflous logic. */}
    <RepoTitle   info={ {repo, user }}/>
    <SeemsUnused info={ {repo }      }/>
  </span>
)

const LineTwoDescription = ({ info:{ description } }) => (
  <p className="pinned-repo-desc text-gray font-resizer d-block mt-2 mb-3">
    {description}
  </p>
)

const LineThreeLanguageAndStar = ({ info:{ repo, user, starCount, majorityLanguage, languageColor } }) => (
  <p className="mb-0 f6 text-gray">
    <span className="repo-language-color pinned-repo-meta" style={{backgroundColor:languageColor}}></span>
    {" "+majorityLanguage}
    <a href={`/${user}/${repo}/stargazers`} className="pinned-repo-meta muted-link">
      <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
        height="16" role="img">
        <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
      {starCount}
    </a>
  </p>
)

const PinnedElement = ({ info:{ repo, user, description, starCount, majorityLanguage, languageColor } }) => {
  
  return (
  
  <div className="pinned-repo-item-content">
    <LineOneHandleAndTitle    info={ {repo, user}            }/>
    <LineTwoDescription       info={ {description}           }/>
    <LineThreeLanguageAndStar info={ {repo, user, starCount, majorityLanguage, languageColor } }/>
  </div>
)
  }