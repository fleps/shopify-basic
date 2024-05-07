/**
 * A custom element that manages the variant selection on a product page
 * @element variant-selector
 */
class VariantSelector extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
    this.isReversed = this.dataset.isReversed === 'true';
  }

  onVariantChange() {
    this.getSelectedOptions();
    this.getSelectedVariant();

    if (this.currentVariant) {
      this.updateURL();
      this.updateProductInput();
      this.updatePrices();
      this.updateAvailabilty();
    }
  }

  getSelectedOptions() {
    this.options = Array.from(this.querySelectorAll('select'), (select) => select.value);
    if (this.isReversed) {
      this.options = this.options.reverse();
    }
  }

  getVariantJSON() {
    this.variantsData = this.variantsData || JSON.parse(this.dataset.variants);
    return this.variantsData;
  }

  getSelectedVariant() {
    this.currentVariant = this.getVariantJSON().find((variant) => {
      const items = !variant.options
        .map((option, index, arr) => {
          return this.options[index] === option;
        })
        .includes(false);

      if (items) {
        return variant;
      }
    });
  }

  updateURL() {
    if (this.currentVariant) {
      window.history.replaceState({}, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
    }
  }

  updateProductInput() {
    document.querySelector('.shopify-product-form').querySelector('input[name="id"]').value = this.currentVariant.id;
  }

  updatePrices() {
    const $produtcInfo = document.querySelector('.product--content');
    const $strikePriceEl = $produtcInfo.querySelector('#strike-price');
    const $currentPriceEl = $produtcInfo.querySelector('#current-price');
    const $saleBadgeEl = $produtcInfo.querySelector('#sale-badge');
    const moneySymbol = $currentPriceEl.dataset.currencySymbol;

    const compare_at_price = this.currentVariant.compare_at_price || false;
    const price = this.currentVariant.price;
    const isOnSale = compare_at_price && compare_at_price > price;
    const newPrice = (parseInt(price) / 100).toFixed(2);

    $currentPriceEl.textContent = moneySymbol + newPrice;

    if (isOnSale) {
      const newStrikePrice = (parseInt(compare_at_price) / 100).toFixed(2);
      $strikePriceEl.textContent = moneySymbol + newStrikePrice;
    }

    [$strikePriceEl, $saleBadgeEl].forEach((el) => el.classList.toggle('hidden', !isOnSale));
  }

  updateAvailabilty() {
    const isAvailable = this.currentVariant.available;
    const $atc = document.querySelector('.product--content #AddToCart');
    $atc.toggleAttribute('disabled', !isAvailable);
    $atc.textContent = isAvailable ? 'Add To Cart' : 'Sold Out';
  }
}

customElements.define('variant-selector', VariantSelector);

/* ------------------------------------------------- */
/*               Carousel for PDP                     */

try {
  const swiperVars = {
    swiper: Swiper,
    init: false,
    mq: window.matchMedia('(max-width: 1023px)')
  }

  const handleCarousel = () => {
    let toShowSlider = swiperVars.mq.matches;

    if (toShowSlider && !swiperVars.init) {
      swiperVars.init = true;
      swiperVars.swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: false,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else if (swiperVars.init) {
      swiperVars.swiper.destroy();
      swiperVars.init = false;
    }
  };

  handleCarousel();

  swiperVars.mq.addEventListener('change', () => {
    handleCarousel();
  });

} catch (error) {
  console.log('Swiper not loaded, carousel not available');
}