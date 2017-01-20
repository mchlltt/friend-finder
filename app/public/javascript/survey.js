$(document).ready(function() {
    var questions = [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten'
    ];

    var choices = [
        '1 (Strongly Disagree)',
        '2',
        '3',
        '4',
        '5 (Strongly Agree)'
    ];

    var questionDiv = $('#questions');

    i = 0;

    questions.forEach(function (question) {
        i++;
        var item = $('<div class="question">');
        var headline = $('<h2>').text('Question ' + i);
        var questionText = $('<h3>').text(question);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        choices.forEach(function(choice) {
            var option = $('<option>').text(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        questionDiv.append(item);
    });

    $('#submit').on('click', function() {
        var answers = [];

        Object.keys($('.selector')).forEach(function(key) {
            if (answers.length < questions.length) {
                answers.push($('.selector')[key].value.charAt(0));
            }
        });

        var surveyData = {
            name: $('#userName').val(),
            photo: $('#imageLink').val(),
            answers: answers
        };

        $.post('/api/friends', surveyData, function(data) {

            // Need to replace this with a modal, but it works for testing.
            if (data) {
                alert(JSON.stringify(data));
            }

            return false;
        });
    });
});