import React from 'react';
export { AltItem }
const AltItem = ({name}) => (
  <li className="pinned-repo-item  p-3 mb-3 border border-gray-dark rounded-1 js-pinned-repo-list-item public source reorderable sortable-button-item">
    <div className="pinned-repo-item-content">
      <span className="d-block position-relative">
        <input type="hidden" name="repo_ids[]" id="pinned-repo-reorder-147894355" value="147894355"
          className="form-control" />
        <span className="pinned-repository-handle js-pinned-repository-reorder float-left pr-2" title="Drag to reorder">
          <svg className="octicon octicon-grabber" viewBox="0 0 8 16" version="1.1" width="8" height="16"
            aria-hidden="true">
            <path fillRule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" /></svg>
        </span>
        <a href="/MichaelDimmitt/De-Nest" className="text-bold">
          <span className="repo js-repo" title="De-Nest">De-Nest</span>
        </a>
        <button type="button" className="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
          data-direction="up"><svg aria-label="Move De-Nest up" className="octicon octicon-chevron-up"
            viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
            <path fillRule="evenodd" d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z" /></svg></button>
        <button type="button" className="btn btn-outline btn-sm show-on-focus sortable-button js-sortable-button right-0"
          data-direction="down"><svg aria-label="Move De-Nest down" className="octicon octicon-chevron-down"
            viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img">
            <path fillRule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" /></svg></button>
      </span>


      <p className="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
        flatten_a_deeply_nested_object-or-array, just print out all the keys, just print out all the
        values. format the stuff do the things.
      </p>

      <p className="mb-0 f6 text-gray">
        <span className="repo-language-color pinned-repo-meta" style={{backgroundColor:'#f1e05a'}}></span>
        JavaScript
        <a href="/MichaelDimmitt/De-Nest/stargazers" className="pinned-repo-meta muted-link">
          <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14"
            height="16" role="img">
            <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z" /></svg>
          1
        </a>
      </p>
    </div>
  </li>
);