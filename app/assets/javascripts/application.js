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

      // Initialise loader
      var loader = new GOVUK.Loader()
      loader.init({
        container: 'address-lookup-loader',
        label: true,
        labelText: 'Finding address...'
      })
      $('#loader').focus()
      // setTimeout(function () { $('#loader').focus() }, 2 * 1000)
      setTimeout(function () { loadContent(loader) }, 7 * 1000)

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
