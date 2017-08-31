/* product handling */

// delete product by id

$('.thumbnail').on('click', '.remove', function (e) {
  const id = $(this).data('id')
  const url = `/product/${id}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then(msg => {
      $(this).closest('.thumbnail').remove()
    })
})

// update product reservation by id

$('.thumbnail').on('click', '.orderProduct', function (e) {
  const id = $(this).data('id')
  const url = `/product/${id}`
  const method = 'PUT'
  const element = $(this).closest('.thumbnail')
  const reserved = element.is('.product-reserved')
  const data = { reserved: !reserved }

  $.ajax({ url, method, data })
    .then(msg => {
      if (data.reserved)
        element.addClass('product-reserved')
      else
        element.removeClass('product-reserved')
    })
})
