/* Country Selector Code */
/* Approach based on Shopify Common JS */
const setSelectorByValue = function (selectEl, value) {
  selectEl.selectedIndex = selectEl.querySelector(`[value="${value}"]`)?.index;
  selectEl.dispatchEvent(new Event('change'));
};

const CountryProvinceSelector = function (countryElID, provElID, options) {
  this.countryEl = document.getElementById(countryElID);
  this.provinceEl = document.getElementById(provElID);
  this.provinceContainer = document.getElementById(options['elToDisable'] || provElID);

  if (!this.countryEl || !this.provinceEl || !this.provinceContainer) {
    return;
  }

  this.countryEl.addEventListener('change', (e) => this.countryChanged(e));
  this.initCountry();
  this.initProvince();
};

CountryProvinceSelector.prototype = {
  initCountry: function () {
    const value = this.countryEl.getAttribute('data-default') || this.countryEl.value;

    if (value) {
      setSelectorByValue(this.countryEl, value);
    }

    // Update Shopify divisor option for better UX.
    const divisorOption = this.countryEl.querySelector('[value*="---"]');
    if (divisorOption) {
      divisorOption.disabled = true;
      divisorOption.value = '';
      divisorOption.textContent = 'Select your country';
    }
  },

  initProvince: function () {
    const value = this.provinceEl.dataset.default;

    if (value && this.provinceEl.options.length > 0) {
      setSelectorByValue(this.provinceEl, value);
    }
  },

  countryChanged: function (e) {
    const opt = this.countryEl.options[this.countryEl.selectedIndex];
    const raw = opt.dataset.provinces;
    const provinces = JSON.parse(raw);

    this.provinceEl.innerHTML = ''; //Clean up province options

    if (provinces && provinces.length == 0) {
      this.provinceContainer.classList.add('disabled');
      this.provinceEl.required = false;
      this.provinceEl.disabled = true;
      this.createOptions(this.provinceEl, [['', 'N/A on selected country']]);
    } else {
      this.provinceContainer.classList.remove('disabled');
      this.provinceEl.required = true;
      this.provinceEl.disabled = false;
      this.createOptions(this.provinceEl, provinces);
    }
  },

  createOptions: function (selectEl, provincesArr) {
    let optionsEls = provincesArr.map((province) => `<option value='${province[0]}'>${province[1]}</option>`);
    selectEl.innerHTML = optionsEls;
  },
};

document.querySelectorAll('[data-address-country-selector]').forEach((inputField) => {
  const formId = inputField.dataset.formId;
  const countrySelector = `${formId}_country`;
  const provinceSelector = `${formId}_province`;
  const containerSelector = `${formId}_province_wrapper`;

  new CountryProvinceSelector(countrySelector, provinceSelector, {
    elToDisable: containerSelector,
  });
});