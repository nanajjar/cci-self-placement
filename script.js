$(document).ready(function() {

    $('input[name="previousCourse"]').change(checkPrevCourse);
    $('input[name="previousExp"]').change(checkPrevExp);
    $('select[name="lastCourse"]').change(checkLastCouse);
    $('input[name="142Score"]').change(check142Grade);
    $('input[name="apScore"]').change(checkAPGrade);
    $('input[name="ibScore"]').change(checkIBGrade);
    $('select[name^="121"]').change(check121Topics);
});

function checkPrevCourse(event) {
    let resp = $('input[name="previousCourse"]:checked').val();
    console.log(resp);
    if (resp == 'Yes') {
        showQuestion($(event.target), $('#lastCourse'));
    } else {
        showQuestion($(event.target), $('#prevExp'));
    }
}

function checkPrevExp(event) {
    let resp = $('input[name="previousExp"]:checked').val();
    console.log(resp);
    if (resp == 'Yes') {
        showQuestion($(event.target), $('#121topics'));
    } else {
        showQuestion($(event.target), $('#result-121'));
    }
}

function checkLastCouse(event) {
    $('.gradeCheck').prop("checked", false);
    $('.gradeCheck').hide();

    let course = $('select[name="lastCourse"]').val();
    console.log(course);
    switch(course) {
        case 'CSE142': 
            showQuestion($(event.target), $('#142Score')); 
            break;
        case 'AP-A':
            showQuestion($(event.target), $('#apScore'));
            break;
        case 'IB-SL':
        case 'IB-HL':
            showQuestion($(event.target), $('#ibScore'));
            break;
        case 'ECS':
        case 'AP-P':
            showQuestion($(event.target), $('#result-adv'))
            break;        
        default:
            showQuestion($(event.target), $('#121topics'));
            break;
    }
}

function check142Grade(event) {
    $('input[name="apScore"]').prop("checked", false);
    $('input[name="ibScore"]').prop("checked", false);

    let grade = $('input[name="142Score"]:checked').val();
    console.log(grade);
    switch (grade) {
        case '2':
        case '3':
        case 'S':
        case 'X':
            showQuestion($(event.target), $('#121topics'));
            break;
        default:
            showQuestion($(event.target), $('#result-adv'));
            break;
    }
}

function checkAPGrade(event) {
    $('input[name="142Score"]').prop("checked", false);
    $('input[name="ibScore"]').prop("checked", false);

    let grade = $('input[name="apScore"]:checked').val();
    console.log(grade);
    switch (grade) {
        case '3':
        case '4':
        case '5':
        case 'X':
            showQuestion($(event.target), $('#121topics'));
            break;
        default:
            showQuestion($(event.target), $('#result-adv'));
            break;        
    }
}

function checkIBGrade(event) {
    $('input[name="apScore"]').prop("checked", false);
    $('input[name="142Score"]').prop("checked", false);

    let grade = $('input[name="ibScore"]:checked').val();
    console.log(grade);
    switch (grade) {
        case '4':
        case '5':
        case '6':
        case '7':
        case 'X':
            showQuestion($(event.target), $('#121topics'));
            break;
        default:
            showQuestion($(event.target), $('#result-adv'));
            break;
    }
}

function check121Topics(event) {
    let topics = $('#121topics').find('select');
    console.log(topics);

    let responses = topics.get().map(x => $(x).val());
    if (responses.every(x => x == 2)) {
        showQuestion($(event.target), $('#121p1'));
    } else if (responses.every(x => x)) {
        showQuestion($(event.target), $('#result-121'));
    } else {
        showQuestion($(event.target), null);
    }
}

function showQuestion(prev, target) {
    // hide all later questions
    prev.parents('.question').nextAll('.question').hide();

    // hide results
    $('#results').children().hide();

    if (target) {
        target.show();
        target.children().show();
    }
}