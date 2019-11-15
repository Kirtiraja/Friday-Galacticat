import { Calc } from './Calc';
import './styles.css';

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
