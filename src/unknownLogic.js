import React from 'react';
export { NotSure, SubmitOrError }

const NotSure = ({name}) => (
  <div>
    {/* not sure
    // update classNames if you want to use.
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
  <div style={{display:'flex',flex:4, justifyContent:'space-evenly'}} >
    
    <h2 className="custom f4 mb-2 text-normal">
      Pinned repositories
      <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="13" className="spinner pinned-items-spinner js-pinned-items-spinner"
        alt=""/>
      {/* below is the magical text that checks for error or success. */}
      <span className="ml-2 text-gray f6 js-pinned-items-reorder-message" role="status" aria-live="polite"
        data-error-text="Something went wrong." data-success-text="Order updated."></span>
    </h2>
    <details style={{ width: '359px' }} className="details-reset details-overlay details-overlay-dark" data-deferred-details-content-url="/users/MichaelDimmitt/pinned_repositories_modal" id="choose-pinned-repositories">
      <summary className="btn-link muted-link float-right mt-1 pinned-repos-setting-link">Customize your pinned repositories</summary>
      <details-dialog className="anim-fade-in fast Box Box--overlay d-flex flex-column">
        <include-fragment className="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
      </details-dialog>
    </details>
  </div>
);