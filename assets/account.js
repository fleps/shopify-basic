/* Delete Address Actions */
const delAddressConfirmation = ($dialog, addressId) => {
  toggleSpinner($dialog.querySelector('.dialog-inner'), true);

  const formData = new FormData();
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

const delAddressInit = ($dialog, addressId) => {
  $dialog.querySelector('[data-confirm-delete]').addEventListener('click', () => {
    delAddressConfirmation($dialog, addressId);
  });
};

const delAddressTriggerAction = ($button) => {
  $button.addEventListener('click', () => {
    const addressId = $button.dataset.deleteAddress;
    const $dialog = document.querySelector('[data-dialog=deleteAddress]');

    $dialog.showModal();
    delAddressInit($dialog, addressId);
  });
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
document.querySelectorAll('[data-delete-address]').forEach(($button) => {
  delAddressTriggerAction($button);
});

document.querySelector('[data-reset-password-for]').addEventListener('click', resetPassword);