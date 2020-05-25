$(document).ready(function(){
            $('#mycarousel').carousel({interval:5000});
            $('#carouselButton').click(function(){
                if($('#carouselButton').children('span').hasClass('fa-pause')){
                 $('#mycarousel').carousel('pause');
                 $('#carouselButton').removeClass('btn-danger');
                 $('#carouselButton').addClass('btn-primary');
                 $('#carouselButton').children('span').removeClass('fa-pause'); 
                 $('#carouselButton').children('span').addClass('fa-play');  
                }
                else{
                    if($('#carouselButton').children('span').hasClass('fa-play')){
                 $('#mycarousel').carousel('cycle');
                 $('#carouselButton').removeClass('btn-primary');
                 $('#carouselButton').addClass('btn-danger');
                 $('#carouselButton').children('span').removeClass('fa-play'); 
                 $('#carouselButton').children('span').addClass('fa-pause');
                }
               } 
            });
            $('#loginButton').click(function(){
                $('#loginModal').modal('toggle');
            })
            $('#reserveButton').click(function(){
                $('#gotoform').modal('toggle');
            })  
        })