var switchLike = function(event) {
  event.preventDefault();
  var a = $(this).find('a');
  
  if (/\s*Liked!\s*/.test(a.text())) {
    a.text("Like this story!").closest('.news-item').removeClass('is-liked');
  } else {
    a.text("Liked!").closest('.news-item').addClass('is-liked');
  }
};

var showForm = function(event) {
  event.preventDefault();
  $('.form').toggleClass('is-visible').find('.form-input').focus();
}

var hideForm = function(event) {
  event.preventDefault();
  $('.form').removeClass('is-visible');
}

$( document ).ready(function() {
  
  $('.news-meta').on('click', '.js-like', switchLike);
  $('.js-add-link').on('click', showForm);
  $('.form').on('submit', hideForm);
  
});
