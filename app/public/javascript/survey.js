$(document).ready(function() {
    var questions = [
        'I am the life of the party.',
        'I am extraordinarily cynical.',
        'I have a poor grip on reality.',
        'I crave attention.',
        'I would rather sleep in on my days off.',
        'I have a good relationship with my family.',
        'I can usually remember everything I\'ve done lately without too much effort.',
        'I enjoy cooking for myself and others.',
        'I am a pet person.',
        'I believe in a higher power.'
    ];

    var choices = [
        '1 (Strongly Disagree)',
        '2 (Disagree)',
        '3 (Neutral)',
        '4 (Agree)',
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

    $('#submit').on('click', function(event) {

        event.preventDefault();

        var userName = $('#userName').val();
        var imageLink = $('#imageLink').val();

        if (userName.length > 0 && imageLink.length >0) {
            var answers = [];

            Object.keys($('.selector')).forEach(function(key) {
                if (answers.length < questions.length) {
                    answers.push($('.selector')[key].value.charAt(0));
                }
            });

            var surveyData = {
                name: userName,
                photo: imageLink,
                answers: answers
            };

            $.post('/api/friends', surveyData, function(data) {

                if (data) {

                    $('#modalContent').empty();
                    $('#userName').val('');
                    $('#imageLink').val('');

                    data.forEach(function(profile) {
                        console.log(profile);
                        var profileDiv = $('<div class="profile">');
                        var name = profile.name;
                        var photoURL = profile.photo;
                        var nameHeader = $('<h3>').text(name);
                        var photo = $('<img>').attr('src', photoURL);
                        profileDiv.append(nameHeader, photo);

                        $('#modalContent').append(profileDiv);
                    });

                    if (data.length > 1) {
                        $('.modal-title').text('Your best matches!');
                    } else {
                        $('.modal-title').text('Your best match!');
                    }

                    $('#resultModal').modal();
                }
            });
        } else {
            $('.warning').show();
            setTimeout(function() {
                $('.warning').hide();
            }, 2500);
        }
    });
});