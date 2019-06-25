(function () {

  // MODEL
  function Model() {
    this.counter = 0;
  }
  Model.prototype.save = function() {
    // TODO Call API
    console.log('saved: ' + this.counter);
  };

  // CONTROLLER
  function Controller(model, view) {
    this.model = model;
    this.view = view;
  }
  Controller.prototype.increment = function () {
    this.model.counter++;
    this.view.renderCounter(this.model.counter);
  };
  Controller.prototype.clear = function () {
    this.model.counter = 0;
    this.view.renderCounter(0);
  };
  Controller.prototype.save = function () {
    this.model.save();
    this.view.renderSave();
  };

  // VIEW
  function View() {
    this.controller = controller;
    this.elements = {
      incrementButton: "#increment",
      clearButton: "#clear",
      saveButton: "#save",
      counterContainer: "#counter",
      statusContainer: "#status"
    };
  }
  View.prototype.initEventListeners = function () {
    this.listen(this.elements.incrementButton, 'click', 'increment');
    this.listen(this.elements.clearButton, 'click', 'clear');
    this.listen(this.elements.saveButton, 'click', 'save');
  };
  View.prototype.listen = function(element, event, handler) {
    // $(element).on(event, this.controller[handler]); // in method this != controller
    $(element).on(event, this.controller[handler].bind(this.controller));
  };
  View.prototype.renderCounter = function(type, data) {
    $(this.elements.counterContainer).text(data);
  };
  View.prototype.renderSave = function(type) {
    $(this.elements.statusContainer).text('Saved');
    $(this.elements.statusContainer).show();
    $(this.elements.statusContainer).fadeOut(1000);
  };

  // APP
  $(document).ready(function () {
    var model = new Model();
    var view = new View();
    var controller = new Controller(model, view);

    view.controller = controller;
    view.initEventListeners();
  });

})();
