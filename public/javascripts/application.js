/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$('.address-lookup-step2').hide()

$('#find-address').on('click', function (e) {
  e.preventDefault()
  $('.address-lookup-step1').hide()
  $('.address-lookup-step2').show()
})
