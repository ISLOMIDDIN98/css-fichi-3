// $('.card').on('click',function(){
//  $('.wrapper').toggleClass('wrapper-origin');
// });





const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click',function(){
  document.body.classList.toggle('wrapper-origin');
});