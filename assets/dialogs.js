/* Dialog default actions.
  Ideally this should be expanded to be more flexible (ajax methods, etc.)
*/

const dialogInitEvents = ($dialog) => {
  /* Open Events */
  if ($dialog.dataset.dialog.includes('3D')) {
    $dialog.querySelector('model-viewer')?.dismissPoster();
    document.body.classList.add('overflow-hidden');
  }

  /* Close Events */
  /* The dialog close event fires when the user closes it (via a button or ESC), and doesn't bubble, so to listen to it, needs to be defined when the dialog is created/opened */
  $dialog.addEventListener('close', () => {
    document.body.classList.remove('overflow-hidden');

    if ($dialog.dataset.dialog == 'newAddress') {
      $dialog.querySelector('form').reset();
    }
  }, { once: true });
}

const dialogOpen = (e) => {
  const $trigger = e.target.closest('[data-target-dialog]');
  if (!$trigger) return;

  const $dialog = document.querySelector(`[data-dialog=${$trigger.dataset.targetDialog}]`);
  if (!$dialog) return;

  $dialog.showModal();
  dialogInitEvents($dialog);
};

const dialogCloseTrigger = (e) => {
  const $dialogCloseBtn = e.target.closest('[data-dialog-close]');
  if (!$dialogCloseBtn) return;

  const $dialog = $dialogCloseBtn.closest('.dialog-main');
  if (!$dialog) return;

  $dialog.close();
};

const dialogFormSubmit = (e) => {
  const $form = e.target.closest('form');
  if (!$form) return;

  const $dialog = $form.closest('.dialog-main');
  if (!$dialog) return;

  toggleSpinner($dialog.querySelector('.dialog-inner'), true);
};

document.addEventListener('click', dialogOpen);
document.addEventListener('click', dialogCloseTrigger);
document.addEventListener('submit', dialogFormSubmit);
