describe('Mediator', function () {

  var mediator;
  beforeEach(function() {
    mediator = new Mediator();
  });

  describe('When you initialize a mediator', function() {

    it('has a empty subscribers list', function() {
      expect(mediator.subscribers).toEqual({});
    });

  });

  describe('You can subscrire and unsubscribe', function() {

    it('it allows you to subscribe to some event', function() {
      mediator.subscribeTo('I\'m a event', fn);
      expect(Object.keys(mediator.subscribers).length).toEqual(1);
    });

    it('it allows you to unsubscribe from some event', function() {
      mediator.unsubscribeFrom('I\'m a event', fn);
      expect(Object.keys(mediator.subscribers).length).toEqual(0);
    });

  });

});

