var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function() {
  	console.log(MessageView.render)
  	$('#chats').append(MessageView.render)
  }

};