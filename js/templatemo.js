/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail
    

    //tab-2
    var all_panels = $('.templatemo-accordion > li > ul').hide();
    $('.product-2 a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-2').attr('src',this_src);
      return false;
    });
    $('.templatemo-accordion > li > a').click(function() {
      console.log('Hello world!');
      var target =  $(this).nex2();
      if(!target.hasClass('active')){
          all_panels.removeClass('active').slideUp();
          target.addClass('active').slideDown();
      }
    return false;
  });

 //tab-3
  var all_panels = $('.templatemo-accordion > li > ul').hide();
  $('.product-3 a').click(function(){
    var this_src = $(this).children('img').attr('src');
    $('#product-3').attr('src',this_src);
    return false;
  });

  //tab-4
  var all_panels = $('.templatemo-accordion > li > ul').hide();
  $('.product-4 a').click(function(){
    var this_src = $(this).children('img').attr('src');
    $('#product-4').attr('src',this_src);
    return false;
  });

//tab-5

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-5 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-5').attr('src',this_src);
  return false;
});

//tab-6

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-6 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-6').attr('src',this_src);
  return false;
});

//tab-7

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-7 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-7').attr('src',this_src);
  return false;
});

//tab-8

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-8 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-8').attr('src',this_src);
  return false;
});

//tab-9

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-9 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-9').attr('src',this_src);
  return false;
});

//tab-10

var all_panels = $('.templatemo-accordion > li > ul').hide();
$('.product-10 a').click(function(){
  var this_src = $(this).children('img').attr('src');
  $('#product-10').attr('src',this_src);
  return false;
});

//carousel 1
  document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll('#carousel #carousel2 #carousel3 #carousel4 #carousel5 #carousel6 #carousel7 #carousel8 #carousel9 img');
  
    function showImage(index) {
      images.forEach(img => img.style.display = 'none');
      images[index].style.display = 'block';
    }
  
    function nextImage() {
      currentIndex = ++currentIndex % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    showImage(currentIndex);
  
    document.getElementById('nextBtn').addEventListener('click', nextImage);
    document.getElementById('prevBtn').addEventListener('click', prevImage);
  });


//carousel 2 quitapelusas
 
});
