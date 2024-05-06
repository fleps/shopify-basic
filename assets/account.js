/* Delete Address Actions */
const delAddressConfirmation = (e) => {
  const $confirmButton = e.target.closest('[data-confirm-delete]');
  if (!$confirmButton) return;

  const $dialog = $confirmButton.closest('[data-dialog=deleteAddress]');
  if (!$dialog) return;

  const addressId = $dialog.dataset.addressId;
  const formData = new FormData();

  toggleSpinner($dialog.querySelector('.dialog-inner'), true);
  formData.append('_method', 'delete');

  fetch(`/account/addresses/${addressId}`, {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (!response.ok) {
        toggleSpinner($dialog.querySelector('.dialog-inner'), false);
        $dialog.querySelector('[data-delete-error]').classList.remove('hidden');
        return;
      }

      document.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

const openDeleteAddressConfirmation = (e) => {
  const $button = e.target.closest('[data-delete-address]');
  if (!$button) return;

  const addressId = $button.dataset.deleteAddress;
  const $dialog = document.querySelector('[data-dialog=deleteAddress]');
  if (!$dialog) return;

  $dialog.dataset.addressId = addressId;
  $dialog.showModal();
};

/* Trigger reset password from My Account page via Ajax */
const resetPassword = (e) => {
  const email = e.target.dataset.resetPasswordFor;
  if (!email) return;

  toggleSpinner(e.target, true, 'show-spinner-small');
  const formUrl = '/account/recover';
  const formData = new FormData();

  formData.append('email', email);
  formData.append('form_type', 'recover_customer_password');

  fetch(formUrl, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      if (response.ok) {
        window.dispatchEvent(new CustomEvent('showtoast'));
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      toggleSpinner(e.target, false, 'show-spinner-small');
    });
}

/* Inits calls */
document.addEventListener('click', openDeleteAddressConfirmation);
document.addEventListener('click', delAddressConfirmation);
document.querySelector('[data-reset-password-for]').addEventListener('click', resetPassword);