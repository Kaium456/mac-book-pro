function lowCost(product) {
  const myProduct = document.getElementById(product + '-cost');
  const myProductText = myProduct.innerText;
  const myProductNumber = parseInt(myProductText);
  myProduct.innerText = 0;
}

// Another function

function mediumCost(productTwo) {
  const myProductTwo = document.getElementById(productTwo + '-cost');
  const myProductText = myProductTwo.innerText;
  const myProductNumber = parseInt(myProductText);
  myProductTwo.innerText = 180;
}

// calculate function
function getInputValue(product) {
  const productInput = document.getElementById(product + '-cost');
  const productNumber = parseInt(productInput.innerText);
  return productNumber;
}

function totalCalculte() {
  const memoryCost = getInputValue('memory');
  const storageCost = getInputValue('storage');
  const deliveryCost = getInputValue('delivery');

  const subTotal = memoryCost + storageCost + deliveryCost + 1299;
  document.getElementById('total-cost').innerText = subTotal;
  document.getElementById('sub-total').innerText = subTotal;
}

// 8 gb unified memory

document.getElementById('8gb-memory').addEventListener('click', function () {
  lowCost('memory');
  totalCalculte();
});

// 16 gb unified memory

document.getElementById('16gb-memory').addEventListener('click', function () {
  mediumCost('memory');
  totalCalculte();
});

// 256gb storage cost

document.getElementById('256gb-ssd').addEventListener('click', function () {
  lowCost('storage');
  totalCalculte();
});

// 256gb storage cost

document.getElementById('512gb-ssd').addEventListener('click', function () {
  const storage = document.getElementById('storage-cost');
  const storageText = storage.innerText;
  const storageNumber = parseInt(storageText);
  storage.innerText = 100;
  totalCalculte();
});

//1TB SSD COST

document.getElementById('1TB-ssd').addEventListener('click', function () {
  mediumCost('storage');
  totalCalculte();
});

// Friday free delivery

document.getElementById('free-delivery').addEventListener('click', function () {
  lowCost('delivery');
  totalCalculte();
});

// Monday charge delivery

document
  .getElementById('charge-delivery')
  .addEventListener('click', function () {
    const delivery = document.getElementById('delivery-cost');
    const deliveryText = delivery.innerText;
    const deliveryNumber = parseInt(deliveryText);
    delivery.innerText = 20;
    totalCalculte();
  });

// apply promo code

document.getElementById('promo-apply').addEventListener('click', function () {
  const input = document.getElementById('promo-code');
  const inputText = input.value;
  if (inputText == 'stevekaku') {
    const subTotal = document.getElementById('sub-total');
    const subTotalNumber =
      parseInt(subTotal.innerText) - parseInt(subTotal.innerText) * 0.2;
    subTotal.innerText = subTotalNumber;
  } else {
    document.getElementById('promo-error').innerText = 'promo code not found !';
  }

  input.value = '';
});
