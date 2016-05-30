$.mockjax({
  url: 'products/1',
  responseTime: 100,
  responseText: {
    id: 1,
    productName: 'The best donuts',
    cost: 100
  }
});

$.mockjax({
  url: 'customers',
  responseTime: 100,
  responseText: {
    id: 1,
    name: 'a customer'
  }
});

