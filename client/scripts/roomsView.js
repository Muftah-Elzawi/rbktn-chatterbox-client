var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(name) {
  	this.$button.on('click',function(){
  		this.$select.append('<option value="' + name +'">' + name +'</option>')
  	})
  }
};
