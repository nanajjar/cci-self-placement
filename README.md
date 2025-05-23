# ITSC 121X Self-Placement

This tool provides the workflow for the University of North Carolina at Charlotte (UNC Charlotte) self-placement tool for the introductory programming courses ITSC 121X (ITSC 1212 & 1213).

## Setup

This repo does not require a complicated development setup, and simply relies on basic web development skills (HTML/CSS/Javascript). The dependencies for the project are linked from the top of the `index.html` file.

## Development

There are three main files that are used to build the tool.

* `index.html` has all of the text content of the tool including instructions and code examples. Note that each set of questions is IDed with a specific name to refer to later.
* `script.js` contains the main logic of navigating through the tool based on user inputs
* `style.css` contains page stylings

Note that we rely on libraries jQuery (for ease of Javascript writing), Bootstrap (for easier default stylings), and Prism.js for code highlighting.

For example, the following snippets show the HTML and Javascript needed to run the first question asking "Have you taken a previous computer science course?". Note the linking between the form input name `previousCourse` in both places.

HTML

```html
<div class="mb-3 question" id="prevCourse">
    <label class="form-label" for="previousCourse">Have you taken a previous computer science course?</label>
    <div class="form-check">
        <input autocomplete="off" class="form-check-input" type="radio" name="previousCourse" id="previousCourseYes" value="Yes">
        <label class="form-check-label" for="previousCourseYes">Yes</label>
    </div>
    <div class="form-check">
        <input autocomplete="off" class="form-check-input" type="radio" name="previousCourse" id="previousCourseNo" value="No">
        <label class="form-check-label" for="previousCourseNo">No</label>
    </div>
</div>
```

Javascript

```Javascript
$(document).ready(function() {
    $('input[name="previousCourse"]').change(checkPrevCourse);
    // ...
});

function checkPrevCourse(event) {
    let resp = $('input[name="previousCourse"]:checked').val();
    if (resp == 'Yes') {
        showQuestion(event, $(event.target), $('#lastCourse'));
    } else {
        showNextQuestion(event, $(event.target));
    }
}
```
#  Acknowledgment
This is an adaptation of tool developed for the University of Washington by Brett Wortzman, Hunter Schafer, and Zorah Fung.
