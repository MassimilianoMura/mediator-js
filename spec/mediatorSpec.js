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

  describe('You can subscrire, unsubscribe and publish', function() {

    it('it allows you to subscribe to some event', function() {
      mediator.subscribeTo('I\'m a event', fn);
      expect(Object.keys(mediator.subscribers).length).toEqual(1);
    });

    it('it allows you to unsubscribe from some event', function() {
      mediator.unsubscribeFrom('I\'m a event', fn);
      expect(Object.keys(mediator.subscribers).length).toEqual(0);
    });

    it('it allows you to subscribe and publish some event', function() {
      var a1 = 0,
          a2 = 0,
      f1=function(){a1++},
      f2=function(){a2++};
      mediator.subscribeTo('eventName', f1);
      mediator.subscribeTo('eventName', f2);
      mediator.publish('eventName', {});
      expect(a1).toEqual(1);
      expect(a2).toEqual(1);
    });
  });


});


