import { Calculator } from './calculator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#userAge-form').submit(function(event) {
    event.preventDefault();
    let userInputAge = $('#userAge').val();
    let output = Calculator(userInputAge);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
