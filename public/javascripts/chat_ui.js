function divEscapedContentElement(message) {
  return $('<div></div>').text(message);
}

function divSystemContentElement(message) {
  return $('<div></div>').html('<i>' + message + '</i>');
}

function processUserInput(chatApp, socket) {
  var message = $('#send-message'.val();
  var systemMessage;

  if(message.charAt(0) == '/') {
    $('#messages').append(divSystemContentElement(message));
  } else {
    chatApp.sendMessage($('#room').text(), message);
    $('#messages').append(divEscapedContentElement(message));
    $('#messages').scrollTop($('#messages').prop('scrollHeight'));
  }

  $('#send-message'.val('');

}

var socket = io.connect();

$document.ready(function () {
  var chatApp = new Chat(socket);
  
  socket.on('nameResult', function (result) {
    var message;
    
    if (result.success) {
      message = 'You are known as ' + result.name + '.';
      
    } else {
      message = result.message;
    }
    $('#messages').append(divSystemContentElement(message));
  }
  
  socket.on('joinResult', function (result) {
    $('#room').text(result.room);
    $('#messages').append(divSystemContentElement('Room changed'));
  }
  
  socket.on('message', function (message) {
    var newElement = $('<div></div>').text(message.text);
    $('#messages').append(newElemwmt);
  }
  
  socket.on('rooms', function () {
    
  }
  
  setInterval(function(){
  
  }, 1000);
  
  $('#send-message').focus();
  
  $('#send-form').submit(function(){
  
  });
  

  
  
  
  
  
  
});