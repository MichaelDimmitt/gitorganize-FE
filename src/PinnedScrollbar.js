import React from 'react';
const { HandleThing, RepoTitle, SeemsUnused } = require('./lineOneDependencies.js')
const { AltItem } = require('./altItem.js')
/**
 * A counter button: tap the button to increase the count.
 */

const LineOneHandleAndTitle = ({}) => (
  <span className="d-block position-relative">
    <input type="hidden" name="repo_ids[]" id="pinned-repo-reorder-147890778" value="147890778" className="form-control" />
    <HandleThing/>
    <RepoTitle/>
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


const ListItem = ({name}) => (
    <li  className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
      <PinnedElement/>
    </li>
);

const NotSure = ({name}) => (
  <div>
    {/* not sure
    <div id="ajax-error-message" className="ajax-error-message flash flash-error">
      <svg className="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fillRule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" /></svg>
      <button type="button" className="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg className="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
          <path fillRule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" /></svg>
      </button>
      You can’t perform that action at this time.
    </div>
  */}
  </div>
);

const SubmitOrError = ({name}) => (
  <div>
    <details className="details-reset details-overlay details-overlay-dark" data-deferred-details-content-url="/users/MichaelDimmitt/pinned_repositories_modal" id="choose-pinned-repositories">
      <summary className="btn-link muted-link float-right mt-1 pinned-repos-setting-link">Customize your pinned repositories</summary>
      <details-dialog className="anim-fade-in fast Box Box--overlay d-flex flex-column">
        <include-fragment className="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
      </details-dialog>
    </details>

    <h2 className="f4 mb-2 text-normal">
      Pinned repositories
      <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="13" className="spinner pinned-repos-spinner js-pinned-repos-spinner"
        alt=""/>
      {/* below is the magical text that checks for error or success. */}
      <span className="ml-2 text-gray f6 js-pinned-repos-reorder-message" role="status" aria-live="polite"
        data-error-text="Something went wrong." data-success-text="Order updated."></span>
    </h2>
  </div>
);

class PinnedScrollbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{padding: '10px 0px 0px 10px'}}>
        <link crossOrigin="anonymous" media="all" integrity="sha512-mjQPRAh2Y9A0sPdZzipNfPO7PT4g06mk0uZs15DbL/vsNCRGx1uRzWVzls9MJCoy2yRNjaMmEVFKJDpCui00mA=="
          rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-df973073d880f28fbbae0263fb1ef62b.css" />
        <link crossOrigin="anonymous" media="all" integrity="sha512-sFylaerRMF2QvD7BxrJw3uWMZbqMvqlbTqActs2xcnXpypTqYf80W6OJdQHsx2GJrcmQhxU1paT9sUNjcsm/3g=="
          rel="stylesheet" href="https://assets-cdn.github.com/assets/github-c8b7f8ba21d8ea4aac7a0e4f3db4a01c.css" />
        <script crossOrigin="anonymous" integrity="sha512-j7P2Pw3104HznNqyNm7WuCF8Lstcf/sPX5meP6e5RFF177kmi6SAbkZ52A3ttKj0cRHLRrUbk7C1w1xtwh52zA=="
          type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-c163002918ede72971a36e0025f67a4a.js"></script>
        <script crossOrigin="anonymous" async="async" integrity="sha512-mKirltAYIDdLyjM6JXq3/pDWd9Hq8ZxXzbioLqfaYCw+za8uLbbYxQ/hD1+/i4zlZo0E9Cm9A6qRyU665FfQnA=="
          type="application/javascript" src="https://assets-cdn.github.com/assets/github-648fd55067472ce5fae41cdf92f72074.js"></script>

        <div className="col-10 float-left">

            <div className="js-pinned-repos-reorder-container">
            <SubmitOrError/>
            <form className="js-pinned-repos-reorder-form" id="user-11463275-pinned-repos-reorder-form" action="/users/MichaelDimmitt/reorder_pinned_repositories"
              acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden"
              name="_method" value="put" /><input type="hidden" name="authenticity_token" value="ZPGZVl0xvQsVNRLfBda3s0M0/ktKPUH3MUUP9Ije3rIQMF3yEFbK7nja8x/SBhbWvgsQWEQ/9ySjoAeRmBJwTA==" />
            <ol className="pinned-repos-list  mb-4 js-pinned-repos-reorder-list" >

                <ListItem/>
                <ListItem/>
                <ListItem/>
                <AltItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                {/*}
                */}
              </ol>
            </form>
          </div>
        </div>
        <NotSure/>
      </div>
    );
  }
}
export default PinnedScrollbar;

