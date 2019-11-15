import { Calc } from './Calc';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#userAge-form').submit(function(event) {
    event.preventDefault();
    let userInputAge = $('#userAge').val();
    let output = Calc(userInputAge);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
