$('h1').css('color','blue');
$('button').css('color','red');
$('h1').addClass('bolding margining');  //multiple class at a time
console.log($('h1').attr('class'));
console.log($('h1').css('color')); // to get value of attr just pass one value

$('h1').click(function(){
    $('h1').css('color','purple');
    // $('button').toggle();    // show or hide
    $('button').slideToggle();  //slideUp or slideDown
    // fadeIn or fadeOut or fadeToggle()
});

$(document).keypress(function(event){
    $('h1').text(event.key);
});

$('h1').on('mouseover',function(){
    $('h1').css('color','green');
});


$('h1').before('<button>added by js</button>');
$('h1').after('<button>added by js</button>');
$('h1').append('<button>added by js</button>');
$('h1').prepend('<button>added by js</button>');

