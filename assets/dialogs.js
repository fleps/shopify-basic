/* Dialog default actions.
  Ideally this should be expanded to be more flexible (ajax methods, etc.)
*/
const dialogTriggerAction = ($trigger) => {
  const $dialog = document.querySelector(`[data-dialog=${$trigger.dataset.targetDialog}]`);

  $trigger.addEventListener('click', () => {
    $dialog.showModal();
  });
};

const dialogCloseAction = ($dialog) => {
  const dialogCloseBtn = $dialog.querySelectorAll('[data-dialog-close]');

  dialogCloseBtn.forEach(($button) => {
    $button.addEventListener('click', () => {
      $dialog.close();

      if ($dialog.dataset.dialog == 'newAddress') {
        $dialog.querySelector('form').reset();
      }
    });
  });
};

const dialogFormSubmitAction = ($dialog) => {
  $dialog.querySelector('form')?.addEventListener('submit', (e) => {
    toggleSpinner($dialog.querySelector('.dialog-inner'), true);
  });
};

document.querySelectorAll('[data-target-dialog]').forEach(($trigger) => {
  dialogTriggerAction($trigger);
});

document.querySelectorAll('.dialog-main').forEach(($dialog) => {
  dialogCloseAction($dialog);
  dialogFormSubmitAction($dialog);
});