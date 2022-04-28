$(document).ready(function() {

    $('input[name="previousCourse"]').change(checkPrevCourse);
    $('input[name="previousExp"]').change(checkPrevExp);
    $('select[name="lastCourse"]').change(checkLastCouse);
    $('input[name="142Score"]').change(check142Grade);
    $('input[name="apScore"]').change(checkAPGrade);
    $('input[name="ibScore"]').change(checkIBGrade);
    $('select[name^="121"]').change(check121Topics);
});

function checkPrevCourse() {
    let resp = $('input[name="previousCourse"]:checked').val();
    console.log(resp);
    showAndHide(resp, ['No'], [$('#prevExp')], []);
    showAndHide(resp, ['Yes'], [$('#lastCourse')], [$('#prevExp')]);
}

function checkPrevExp() {
    let resp = $('input[name="previousExp"]:checked').val();
    console.log(resp);
    showAndHide(resp, ['No'], [$('#result-121')], []);
    showAndHide(resp, ['Yes'], [$('#121topics')], []);
}

function checkLastCouse() {
    $('input[name="142Score"]').prop("checked", false);
    $('input[name="apScore"]').prop("checked", false);
    $('input[name="ibScore"]').prop("checked", false);
    let course = $('select[name="lastCourse"]').val();
    console.log(course);

    showAndHide(course, ['CSE142'], [$('#142Score')], [$('#grades').children(), $('#121topics')]);
    showAndHide(course, ['AP-A'], [$('#apScore')], [$('#grades').children(), $('#121topics')]);
    showAndHide(course, ['IB-SL', 'IB-HL'], [$('#ibScore')], [$('#grades').children(), $('#121topics')]);

    showAndHide(course, ['ECS', 'AP-P'], [$('#result-adv')], []);
    showAndHide(course, ['Other'], [$('#121topics')], []);
}

function check142Grade() {
    $('input[name="apScore"]').prop("checked", false);
    $('input[name="ibScore"]').prop("checked", false);
    let grade = $('input[name="142Score"]:checked').val();
    console.log(grade);

    showAndHide(grade, ['2', '3', 'S', 'X'], [$('#121topics')], []);
    showAndHide(grade, ['0', '1', 'NS'], [$('#result-adv')], [$('#121topics')]);
}

function checkAPGrade() {
    $('input[name="142Score"]').prop("checked", false);
    $('input[name="ibScore"]').prop("checked", false);
    let grade = $('input[name="apScore"]:checked').val();
    console.log(grade);

    showAndHide(grade, ['3', '4', '5', 'X'], [$('#121topics')], []);
    showAndHide(grade, ['0', '1', '2'], [$('#result-adv')], [$('#121topics')]);    
}

function checkIBGrade() {
    $('input[name="apScore"]').prop("checked", false);
    $('input[name="142Score"]').prop("checked", false);
    let grade = $('input[name="ibScore"]:checked').val();
    console.log(grade);
    
    showAndHide(grade, ['4', '5', '6', '7', 'X'], [$('#121topics')], []);
    showAndHide(grade, ['0', '1', '2', '3'], [$('#result-adv')], [$('#121topics')]);   
}

function check121Topics() {
    let topics = $('#121topics').find('select');
    console.log(topics);

    let responses = topics.get().map(x => $(x).val());
    if (responses.every(x => x) && responses.every(x => x == 2)) {
        $('#121p1').show();
        $('#121p1').children().show();
    } else {
        $('#121p1').hide();
        $('#121p1').children().hide();
    }
}

function showAndHide(val, targets, showList, hideList) {
    // always hide all results after an update
    // $('#results').children().hide();

    if (targets.includes(val)) {
        for (let item of hideList) item.hide();
        for (let item of showList) item.show();
    }
}
