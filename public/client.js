TrelloPowerUp.initialize({
  'card-back-section': function(t, options){
    return {
      title: 'My Card Back Section',
      icon: 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg',
      content: {
        type: 'iframe',
        url: t.signUrl('./card-back-section.html'),
        height: 320
      }
    };
  }
});
