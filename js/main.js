var $address = $('#address')
var $bathrooms = $('#bathrooms')
var $bedrooms = $('#bedrooms')
var $list = $('#list')
var $form = $('form')

$form.on('submit', function(evt){
    evt.preventDefault()
    var addressValue = $address.val();
    var bathroomsValue = $bathrooms.val();
    var bedroomsValue = $bedrooms.val();

    $list.append(`<li style="display:none">Address : ${addressValue}. Bathrooms: ${bathroomsValue}. Bedrooms: ${bedroomsValue}.</li>`)
    $('li').last().fadeIn(1000)
})

// if user clicks anywhere in the list
// 'this' refers to the specific thing within that was clicked

$list.on('click', 'li', function (){
    $(this).fadeOut(1000, function(){
        $(this).remove()
    })
})


