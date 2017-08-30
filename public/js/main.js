console.log('connect!!')

$('.thumbnail').on('click', '.remove', function (e) {
  const idProduct = $(this).data('id')
  const url = `/user-profile/${idProduct}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then(msg => {
      $(this).closest('.thumbnail').remove()
      console.log(msg)
    })
})

$('.thumbnail').on('click', '.orderProduct', function (e) {
  console.log('click OK !')
  const idProduct = $(this).data('id')
  const url = `/user-profile/${idProduct}`
  const method = 'PUT'
  const reserved = { reserved: true }

  $.ajax({ url, method, reserved })
    .then(msg => {
      $(this).closest('.thumbnail').addClass('product-reserved')
      console.log('pase por ajax !!' + msg)
    })
})
