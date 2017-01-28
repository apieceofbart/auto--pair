document.body.addEventListener('keyup', e => {

  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const { startOffset, endOffset, commonAncestorContainer } = range;

  const textContent = commonAncestorContainer.textContent;

  commonAncestorContainer.textContent = `!${textContent}!`;
})
