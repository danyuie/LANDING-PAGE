
$('.faq_content-item').click( function () {
  var status = $(this).attr("status")
  if (status == 'open') {
    $(this).css("height","51px")
    $(this).attr("status", 'close')
    $(this).children().children("ion-icon").attr("name", 'add-outline')
  } else {
    $(this).css("height","119px")
    $(this).attr("status", 'open')
    $(this).children().children("ion-icon").attr("name", 'remove-outline')
  }
})
// var faqList = $('faq_content-item')
