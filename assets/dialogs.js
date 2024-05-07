/* Dialog default actions.
  Ideally this should be expanded to be more flexible (ajax methods, etc.)
*/
const dialogOpen = (e) => {
  const $trigger = e.target.closest('[data-target-dialog]');
  if (!$trigger) return;

  const $dialog = document.querySelector(`[data-dialog=${$trigger.dataset.targetDialog}]`);
  if (!$dialog) return;

  $dialog.showModal();

  if ($dialog.dataset.dialog.includes('3D')) {
    $dialog.querySelector('model-viewer')?.dismissPoster();
  }
};

const dialogClose = (e) => {
  const $dialogCloseBtn = e.target.closest('[data-dialog-close]');
  if (!$dialogCloseBtn) return;

  const $dialog = $dialogCloseBtn.closest('.dialog-main');
  if (!$dialog) return;

  $dialog.close();

  if ($dialog.dataset.dialog == 'newAddress') {
    $dialog.querySelector('form').reset();
  }
};

const dialogFormSubmit = (e) => {
  const $form = e.target.closest('form');
  if (!$form) return;

  const $dialog = $form.closest('.dialog-main');
  if (!$dialog) return;

  toggleSpinner($dialog.querySelector('.dialog-inner'), true);
};

document.addEventListener('click', dialogOpen);
document.addEventListener('click', dialogClose);
document.addEventListener('submit', dialogFormSubmit);
