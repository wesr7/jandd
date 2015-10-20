// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require bootstrap-sprockets
//= require_tree .




$(document).ready(function(){
    var content = $(".content");
    $(content).hide();

    $("#link_1").on("click", function(){
        if($(content).html()) {
          $(content).empty();
          $(content).append("<div class='row'><div class='col-xs-12'><h1><i>When & Where</i></h1></div><div class='col-xs-12 col-sm-4'><h2>Date</h2><h3>June 18th 2016</h3><h2>Time</h2><h3>6pm</h3><h2>Venue</h2><h3>Brookside Golf Club<br>1133 Rosemont Ave<br>Pasadena, Ca 91103</h3></div><div class='col-xs-12'><h4><strong>Reception to Follow</strong></h4></div></div>");
      } else {
        $(content).append("<div class='row'><div class='col-xs-12'><h1><i>When & Where</i></h1></div><div class='col-xs-12 col-sm-4'><h2>Date</h2><h3>June 18th 2016</h3></div><div class='col-xs-12 col-sm-4'><h2>Time</h2><h3>6pm</h3></div><div class='col-xs-12 col-sm-4'><h2>Venue</h2><h3>Brookside Golf Club<br>1133 Rosemont Ave<br>Pasadena, Ca 91103</h3></div> <h4><strong>Reception to Follow</strong></h4></div>");
        $(content).animate({
            width: 'toggle'
        });
      }      // $(content).toggle();
    });
    $("#link_2").on("click", function(){
        if($(content).html()) {
            $(content).empty();
           $(content).append("<div class='row'><div class='col-xs-12'><h1><i>Accomodations</i></h1></div></div><div class='row'><div class='col-xs-12 col-sm-4'><h2>Courtyard by Marriot</h2><h3>180 North Fair Oaks Ave <br> Pasadena, CA 91103</h3></div><div class='col-xs-12 col-sm-4'><h2>Sheraton Pasadena</h2><h3>303 Cordova St <br> Pasadena, CA 91101</h3></div><div class='col-xs-12 col-sm-4'><h2>The Westin Pasadena</h2><h3>191 North Los Robles Ave <br> Pasadena, CA 91101</h3></div></div>");
       } else {
            $(content).append("<div class='row'><div class='col-xs-12'><h1><i>Accomodations</i></h1></div></div><div class='row'><div class='col-xs-12 col-sm-4'><h2>Courtyard by Marriot</h2><h3>180 North Fair Oaks Ave <br> Pasadena, CA 91103</h3></div><div class='col-xs-12 col-sm-4'><h2>Sheraton Pasadena</h2><h3>303 Cordova St <br> Pasadena, CA 91101</h3></div><div class='col-xs-12 col-sm-4'><h2>The Westin Pasadena</h2><h3>191 North Los Robles Ave <br> Pasadena, CA 91101</h3></div></div></div>");
            $(content).animate({
            width: 'toggle'
        });
        }
    });
    $("#link_3").on("click", function(){
        if($(content).html()) {
            $(content).empty();
            $(content).append("<div class='row'><div class='col-xs-12'><h1><i>Registry</i></h1></div></div><div class='row'><div class='col-xs-12 col-sm-4'><h3><a href='https://www-secure.target.com/gift-registry/giftgiver?registryId=qW0u4L0LTDndC6yMp4tVKA&registryType=WEDDING' target='_blank'>Target</a></h3></div><div class='col-xs-12 col-sm-4'><h3><a href='http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=542314711&pwsurl=' target='_blank'>Bed, Bath and Beyond</a></h3></div><div class='col-xs-12 col-sm-4'><h3><a href='http://www1.macys.com/registry/wedding/guest/?registryId=6403276' target='_blank'>Macy's</a></h3></div></div>");
        } else {
            $(content).append("<div class='row'><div class='col-xs-12'><h1><i>Registry</i></h1></div></div><div class='row'><div class='col-xs-12 col-sm-4'><h3><a href='https://www-secure.target.com/gift-registry/giftgiver?registryId=qW0u4L0LTDndC6yMp4tVKA&registryType=WEDDING' target='_blank'>Target</a></h3></div><div class='col-xs-12 col-sm-4'><h3><a href='http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=542314711&pwsurl=' target='_blank'>Bed, Bath and Beyond</a></h3></div><div class='col-xs-12 col-sm-4'><h3><a href='http://www1.macys.com/registry/wedding/guest/?registryId=6403276' target='_blank'>Macy's</a></h3></div></div>");
            $(content).animate({
            width: 'toggle'
        });
        }
    });
    $("#home").on("click", function(){
        if($(content).html()) {
        $(content).empty();
        $(content).hide();
    } else {
        return false;
    }
    });
});


