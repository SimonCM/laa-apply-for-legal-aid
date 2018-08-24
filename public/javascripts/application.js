/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// Mock address lookup
  if ($('#mock-address-lookup').length) {
    // window.loaderTime = loaderTime || 5 // globaly defined in scripts.html
    $('.address-lookup-step2').hide()
    $('#mock-address-lookup .js-launch-lookup').on('click', function (e) {
      e.preventDefault()
      $('.address-lookup-step1').hide()



      // Copy the postcode and place it into a span on the second step
      var postcode = $('.address-lookup-step1 input').val()
      $('.address-lookup-step2 .postcode').html(postcode)
      return false
    })
    $('.change-postcode').on('click', function (e) {
      e.preventDefault()
      $('.address-lookup-step2').hide()
      $('.address-lookup-step1').show()
    })
  }

  // Loader component
  function loadContent (loader) {
    loader.updateMessage('5 addresses found')
    loader.stop()
    $('.address-lookup-step2').show()
    // $('#event-address').focus() // needed for AT
  }
