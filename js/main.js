!(function() {
  footnotes();

  function footnotes() {
    // Get footnotes
    var footnotesElem = document.querySelector('.post .footnotes');
    if (!footnotesElem) return;

    // Add title to footnotes
    var headingElem = document.createElement('h2');
    headingElem.textContent = 'Notes';
    footnotesElem.insertBefore(headingElem, footnotesElem.firstChild);

    // Footnotes already in use
    if (location.hash.indexOf('#fn') === 0) return;

    // Only one footnote
    if (footnotesElem.lastElementChild.children.length < 2) return;

    // Collapse footnotes until they're interacted with
    footnotesElem.classList.add('footnotes--collapsed');
    footnotesElem.addEventListener('click', function onClick() {
      footnotesElem.removeEventListener('click', onClick);
      footnotesElem.classList.remove('footnotes--collapsed');
    });

    var post = document.querySelector('.post');
    post.addEventListener('click', function onClick(event) {
      var link = event.target;
      if (link.nodeName === 'A' && link.parentElement.nodeName === 'SUP') {
        post.removeEventListener('click', onClick);
        footnotesElem.classList.remove('footnotes--collapsed');
      }
    });
  }
})();
