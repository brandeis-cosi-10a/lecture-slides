let lectures = [
    "01_intro",
    "02_datatypes_expressions_variables",
    "03_conditionals",
    "04_functions",
    "05_testing_and_debugging",
    "06_loops",
    "07_lists",
    "08_dictionaries_sets",
    "09_file_io",
    "10_classes",
    "11_exceptions",
    "11_modules",
    "12_recursion"
];

(function() {
    const container = document.getElementById("container");
    for(const name of lectures) {
        let content = "<div class='row'>" +
            "<div class='five columns'>Lecture: " + name + "</div>" +
            "<div class='one columns'><a href='" + name + ".html'>HTML</a></div>" +
            "<div class='two columns'><a href='" + name + ".slides.html'>HTML slides</a></div>" +
            "<div class='four columns'><a href='https://colab.research.google.com/github/brandeis-jdelfino/cosi-10a/blob/main/lectures/notebooks/" + name + ".ipynb'>Interactive slides on Google Colab</a></div>" +
            "</div>";
        container.insertAdjacentHTML( 'beforeend', content);
    }
})();