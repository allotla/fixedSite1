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

var showModal = function(event) {
  event.preventDefault();
  $('.modal').addClass('is-visible');
  $('.modal-overlay').addClass('is-visible');
}

var hideModal = function(event) {
  $('.modal').removeClass('is-visible');
  $('.modal-overlay').removeClass('is-visible');
}

$( document ).ready(function() {
  
  $('.news-meta').on('click', '.js-like', switchLike);
  $('.js-add-link').on('click', showForm);
  $('.form').on('submit', hideForm);
  $('.news-meta-item').on('click', '.js-news-poster', showModal);
  $('.modal-overlay').on('click', hideModal);
});
