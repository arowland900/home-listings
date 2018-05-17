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

    console.log(addressValue)
})