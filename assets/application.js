/* Global spinner */
const toggleSpinner = ($container, show = true, type = 'show-spinner') => {
  $container.classList.toggle(type, show);
};