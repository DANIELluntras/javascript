//Life cycle Dom Event
document.addEventListener('DOMContentLoaded', function(e){
  console.log('Html parsed and Dom tree Build 😊😊😊😊')

});

window.addEventListener('load', function(e){
  console.log('page Fuly Loaded')
})

window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  console.log(e)
  e.returnValue = '';
})