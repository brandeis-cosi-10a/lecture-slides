const VERSION = 6;

let problems = {
  "PS0": {
    "Hello World": {
      "Using IDE": false
    }
  },
  "PS1": {
    "Mad Libs": {
      "Using IDE": false,
      "Variables": false,
      "Expressions": false,
      "input()": false
    },
    "Weight Comparisons": {
      "Using IDE": false,
      "Variables": false,
      "Datatypes": false,
      "Expressions": false,
      "input()": false
    },
    "Interest Calculator": {
      "Using IDE": false,
      "Variables": false,
      "Datatypes": false,
      "Expressions": false,
      "input()": false
    },
    "String escaping puzzle": {
      "Using IDE": false,
      "String escaping": false
    }
  },
  "PS2": {
    "Light wavelength analyzer": {
      "Variables": false,
      "Expressions": false,
      "Conditionals": false,
      "Conditional logic": false,
      "Using IDE": false
    },
    "Choose your own adventure": {
      "Variables": false,
      "input()": false,
      "Conditionals": false,
      "Conditional logic": false
    },
    "Dice game: debugging": {
      "Variables": false,
      "Datatypes": false,
      "Expressions": false,
      "Conditionals": false,
      "Debugging": false,
      "Using pre-existing code": false
    }
  },
  "PS3": {
    "Tip Calculator": {
      "Variables": false,
      "Datatypes": false,
      "Expressions": false,
      "input()": false,
      "Conditionals": false,
      "Conditional logic": false
    },
    "Shake it off": {
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Functional decomposition": false
    },
    "Magic 8-ball": {
      "Variables": false,
      "input()": false,
      "String escaping": false,
      "Conditionals": false,
      "Conditional logic": false,
      "Function invocation": false,
      "Function definition": false,
      "Function returns": false,
      "Functional decomposition": false
    },
    "Dice Game Refactored": {
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Globals": false,
      "Using pre-existing code": false
    },
  },
  "PS4": {
    "Drawing Squares": {
      "Function invocation": false,
      "Function parameters": false
    },
    "Number Guessing Game": {
      "Variables": false,
      "Datatypes": false,
      "input()": false,
      "Conditionals": false,
      "Loops - while": false,
      "Loops - choosing structure": false
    },
    "Combinatorics": {
      "input()": false,
      "Datatypes": false,
      "Expressions": false,
      "Function definition": false,
      "Function invocation": false,
      "Function parameters": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Functional decomposition": false
    },
    "Calendar Assistant": {
      "input()": false,
      "String escaping": false,
      "Conditionals": false,
      "Conditional logic": false,
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Cumulative algorithm": false,
      "Loops - choosing structure": false
    },
  },
  "PS5": {
    "Dice Game Loops": {
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Globals": false,
      "Loops - for/range": false,
      "Loops - while": false,
      "Loops - choosing structure": false,
      "Using pre-existing code": false
    },
    "Multiplication Tables": {
      "Expressions": false,
      "String escaping": false,
      "Function definition": false,
      "Function returns": false,
      "Fencepost algorithm": false,
      "Loops - nested": false,
      "Unit Testing": false
    },
    "Pascals Triangle": {
      "Using pre-existing code": false,
      "Expressions": false,
      "Function returns": false,
      "Function invocation": false,
      "Loops - choosing structure": false,
      "Fencepost algorithm": false,
      "Loops - nested": false,
      "Unit Testing": false
    }
  },
  "PS6": {
    "To-do list": {
      "Variables": false,
      "input()": false,
      "String escaping": false,
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Globals": false,
      "Loops - while": false,
      "Lists get/set": false,
      "List iteration": false,
      "Functional decomposition": false
    },
    "Number filter": {
      "Datatypes": false,
      "input()": false,
      "Conditionals": false,
      "Loops - for/range": false,
      "Loops - while": false,
      "Cumulative algorithm": false,
      "Fencepost algorithm": false,
      "Loops - choosing structure": false,
      "Lists get/set": false,
      "List iteration": false
    },
    "Odd Calendar": {
      "Datatypes": false,
      "Expressions": false,
      "Conditionals": false,
      "Function definition": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Cumulative algorithm": false,
      "Loops - choosing structure": false,
      "Lists get/set": false,
      "List iteration": false,
      "Unit Testing": false
    }
  },
  "PS7": {
    "Factor finder": {
      "Expressions": false,
      "Conditionals": false,
      "Function definition": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Loops - nested": false,
      "Lists get/set": false,
      "List iteration": false,
      "Lists - nested": false
    },
    "Pig Latin": {
      "Expressions": false,
      "Conditionals": false,
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Cumulative algorithm": false,
      "Loops - choosing structure": false,
      "Lists get/set": false,
      "List iteration": false,
      "String manipulation": false,
      "Unit Testing": false,
      "Functional decomposition": false
    },
    "Vowel Filter": {
      "Conditionals": false,
      "Conditional logic": false,
      "Function definition": false,
      "Function returns": false,
      "List iteration": false,
      "String manipulation": false,
      "Unit Testing": false
    }
  },
  "PS8": {
    "Dice Game Again": {
      "Variables": false,
      "input()": false,
      "Function invocation": false,
      "Function parameters": false,
      "Function returns": false,
      "Loops - while": false,
      "Lists get/set": false,
      "List iteration": false,
      "Tuples": false,
      "References": false,
      "Using pre-existing code": false
    },
    "Age range filter": {
      "Conditional logic": false,
      "Function definition": false,
      "Function returns": false,
      "Lists get/set": false,
      "Dictionary iteration": false,
      "Dictionary filtering": false,
      "Unit Testing": false
    },
    "Birthday Tracker": {
      "Function definition": false,
      "Function returns": false,
      "Cumulative algorithm": false,
      "Lists get/set": false,
      "List iteration": false,
      "Dictionaries get/set": false,
      "Dictionary iteration": false,
      "Sorting": false,
      "Nested data structures": false,
      "Unit Testing": false
    }
  },
  "PS9": {
    "Lottery Analyzer": {
      "Variables": false,
      "Expressions": false,
      "Conditionals": false,
      "Conditional logic": false,
      "Function invocation": false,
      "Function definition": false,
      "Function parameters": false,
      "Function returns": false,
      "Cumulative algorithm": false,
      "Loops - choosing structure": false,
      "Lists get/set": false,
      "List iteration": false,
      "Lists - nested": false,
      "String manipulation": false,
      "Tuples": false,
      "Dictionaries get/set": false,
      "Nested data structures": false,
      "File I/O": false,
      "File I/O - CSVs": false
    },
    "Contacts App": {
      "Datatypes": false,
      "String escaping": false,
      "Lists get/set": false,
      "List iteration": false,
      "Lists - nested": false,
      "References": false,
      "Dictionaries get/set": false,
      "Dictionary iteration": false,
      "Sorting": false,
      "Sets": false,
      "Nested data structures": false,
      "Data structures - choosing appropriately": false
    },
    "Word Analyzer": {
      "Function definition": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Cumulative algorithm": false,
      "String manipulation": false,
      "Tuples": false,
      "Sets": false,
      "File I/O": false
    }
  },
  "PS10": {
    "Hiking Trails": {
      "Expressions": false,
      "Function parameters": false,
      "Fencepost algorithm": false,
      "Lists get/set": false,
      "List iteration": false,
      "Lists - nested": false,
      "Tuples": false,
      "Nested data structures": false,
      "Data structures - choosing appropriately": false,
      "Classes - definition": false,
      "Classes - usage": false,
      "Unit Testing": false
    },
    "Nobel Prizes": {
      "Conditionals": false,
      "Conditional logic": false,
      "Function definition": false,
      "Function returns": false,
      "Loops - for/range": false,
      "Cumulative algorithm": false,
      "Loops - nested": false,
      "List iteration": false,
      "Dictionaries get/set": false,
      "Dictionary iteration": false,
      "Dictionary filtering": false,
      "Sorting": false,
      "Sets": false,
      "Nested data structures": false,
      "File I/O": false,
      "File I/O - JSON": false,
      "Functional decomposition": false,
      "Debugging": false
    },
    "Importing Contacts": {
      "Function definition": false,
      "References": false,
      "Dictionary iteration": false,
      "Sets": false,
      "Nested data structures": false,
      "Data structures - choosing appropriately": false,
      "File I/O": false,
      "File I/O - JSON": false,
      "Functional decomposition": false,
      "Debugging": false,
      "Using pre-existing code": false
    }
  }
}

let skills = {
  "Using IDE": {
  },
  "Variables": {
  },
  "Datatypes": {
  },
  "Expressions": {
  },
  "input()": {
  },
  "String escaping": {
  },
  "Conditionals": {
  },
  "Conditional logic": {
  },
  "Function invocation": {
  },
  "Function definition": {
  },
  "Function parameters": {
  },
  "Function returns": {
  },
  "Globals": {
  },
  "Loops - for/range": {
  },
  "Loops - while": {
  },
  "Cumulative algorithm": {
  },
  "Fencepost algorithm": {
  },
  "Loops - nested": {
  },
  "Loops - choosing structure": {
  },
  "Lists get/set": {
  },
  "List iteration": {
  },
  "Lists - nested": {
  },
  "String manipulation": {
  },
  "Tuples": {
  },
  "References": {
  },
  "Dictionaries get/set": {
  },
  "Dictionary iteration": {
  },
  "Dictionary filtering": {
  },
  "Sorting": {
  },
  "Sets": {
  },
  "Nested data structures": {
  },
  "Data structures - choosing appropriately": {
  },
  "File I/O": {
  },
  "File I/O - CSVs": {
  },
  "File I/O - JSON": {
  },
  "Classes - definition": {
  },
  "Classes - usage": {
  },
  "Unit Testing": {
  },
  "Functional decomposition": {
  },
  "Debugging": {
  },
  "Using pre-existing code": {
  }
}

let totalCap = 0;

function toggleProblem(skill, ps, problem) {
    // toggle the checkbox for this skill/problem
    setProblem(skill, ps, problem, !problems[ps][problem][skill]);
}

function setProblem(skill, ps, problem, value, up=true) {
    problems[ps][problem][skill] = value;
    document.getElementById(skill + "-" + problem + "-selected").checked = value;
    if(up) {
        update();
    }

}

function setSkill(skill, value) {
  for(const ps in problems) {
    for(const problemname in problems[ps]) {
      for(const skillname in problems[ps][problemname]) {
        setProblem(skillname, ps, problemname, value, false);
      }
    }
  }
  update();
}

function countPs() {
    let counts = {};
    for(const ps in problems) {
      for(const problemname in problems[ps]) {
        for(const skillname in problems[ps][problemname]) {
          counts[ps] = counts[ps] || {count: 0, total: 0};
          counts[problemname] = counts[problemname] || {count: 0, total: 0};

          counts[ps].total++;
          counts[problemname].total++;

          if(problems[ps][problemname][skillname]) {
            counts[ps].count++;
            counts[problemname].count++;
          }
        }
      }
    }
    return counts;
}

function setPs(ps, value) {
    for(const problemname in problems[ps]) {
      for(const skill in problems[ps][problemname]) {
        setProblem(skill, ps, problemname, value, false);
      }
    }
    update();
}

function resetEarnedCounts() {
  for(const skillname in skills) {
    skills[skillname].earned = 0;
  }
}

function computeCounts() {
  for(const ps in problems) {
    for(const problemname in problems[ps]) {
      for(const skillname in problems[ps][problemname]) {
        console.log(skillname);
        if(!("count" in skills[skillname])) {
          skills[skillname].count = 0;
        }
        skills[skillname].count += 1;
      }
    }
  }
  for(const skillname in skills) {
    let c = skills[skillname].count;
    if(c == 1) {
      skills[skillname].cap = 1;
    } else if(c == 2 || c == 3) {
      skills[skillname].cap = 2;
    } else if(c == 4) {
      skills[skillname].cap = 3;
    } else if(c == 5 || c == 6) {
      skills[skillname].cap = 4;
    } else if(c == 7) {
      skills[skillname].cap = 5;
    } else if(c >= 12) {
      skills[skillname].cap = 8;
    } else {
      skills[skillname].cap = 6;
    }
    totalCap += skills[skillname].cap;
    skills[skillname].earned = 0;
  }
}

function update() {
    resetEarnedCounts();
    let total_earned_count = 0;
    let total_count = 0;

    for(const ps in problems) {
      for(const problemname in problems[ps]) {
        for(const skillname in problems[ps][problemname]) {
          if(problems[ps][problemname][skillname]) {
            skills[skillname].earned += 1;
            document.getElementById(skillname + "-" + problemname + "-selected").innerHTML = "yes";
          } else {
            console.log(skillname + "-" + problemname + "-selected");
              document.getElementById(skillname + "-" + problemname + "-selected").innerHTML = "no";
          }
        }
      }
    }

    for(const skillname in skills) {
      const earned_count = skills[skillname]['earned'];
      const cap = skills[skillname]['cap'];
      total_count += skills[skillname]['cap'];
      const capped_count = earned_count > cap ? cap : earned_count;
      document.getElementById(skillname + "-total").innerHTML = capped_count;
      document.getElementById(skillname + "-overcap").innerHTML = earned_count;
      total_earned_count += capped_count;
    }

    document.getElementById("earned-skills").innerHTML = total_earned_count;
    document.getElementById("possible-skills").innerHTML = total_count;
    document.getElementById("skills-percentage").innerHTML = (total_earned_count / total_count * 100).toFixed(2);
    let grade = "E";
    if(total_earned_count >= (totalCap * 0.96)) {
        grade = "A+";
    } else if(total_earned_count >= (totalCap * 0.93)) {
        grade = "A";
    } else if(total_earned_count >= (totalCap * 0.9)) {
        grade = "A-";
    } else if(total_earned_count >= (totalCap * 0.87)) {
        grade = "B+";
    } else if(total_earned_count >= (totalCap * 0.83)) {
        grade = "B";
    } else if(total_earned_count >= (totalCap * 0.8)) {
        grade = "B-";
    } else if(total_earned_count >= (totalCap * 0.77)) {
        grade = "C+";
    } else if(total_earned_count >= (totalCap * 0.73)) {
        grade = "C";
    } else if(total_earned_count >= (totalCap * 0.7)) {
        grade = "C-";
    } else if(total_earned_count >= (totalCap * 0.66)) {
        grade = "D+";
    } else if(total_earned_count >= (totalCap * 0.63)) {
        grade = "D";
    } else if(total_earned_count >= (totalCap * 0.6)) {
        grade = "D-";
    } else {
        grade = "E";
    }
    document.getElementById("grade").innerHTML = grade;

    const pscounts = countPs();
    for(const ps in pscounts) {
      document.getElementById(ps + "-earned").innerHTML = pscounts[ps].count;
      document.getElementById(ps + "-total").innerHTML = pscounts[ps].total
    }

    console.log(skills);
    localStorage.setItem("problems", JSON.stringify(problems));
    localStorage.setItem("version", VERSION);
}

(function() {
    let ver = localStorage.getItem("version");
    if(ver !== null && ver >= VERSION) {
      if(localStorage.getItem("problems") !== null) {
        problems = JSON.parse(localStorage.getItem("problems"));
      }
    }

    computeCounts();
    console.log(skills);
    const skillcontainer = document.getElementById("container");
    const skilltotal_container = document.getElementById("skilltotal-container")
    let ps = [];
    let psets = {};

    //for(const skillname in skills) {
    for(const pset in problems) {
        console.log(pset);
        let content = "<div class='row skill-heading'>" +
        "<div class='eight columns' style='padding-top:10px'><b>" + pset + "</b> (<span id='" + pset + "-earned'></span>/<span id='" + pset + "-total'></span>)</div>" +
          "<div class='four columns'>" +
            "<button class='toggle-btn' onclick='setPs(\"" + pset + "\", false)'>none</button>" +
            "<button class='toggle-btn' onclick='setPs(\"" + pset + "\", true)'>all</button>" +
          "</div>" +
        "</div>";

        for(const problemname in problems[pset]) {
          content += "<div class='row'>" +
            "<div class='ten columns'><b>&nbsp;&nbsp;" + problemname + "</b> (<span id='" + problemname + "-earned'></span>/<span id='" + problemname + "-total'></span>)</div>" +
            "</div>";

          for(const skillname in problems[pset][problemname]) {
            const selected = problems[pset][problemname][skillname] ? "checked" : "";
            content += "<div class='row'>" +
              "<div class='ten columns'>&nbsp;&nbsp;&nbsp;&nbsp;" + skillname + "</div>" +
              "<div class='two columns'>" +
                  "<input type='checkbox' " + selected + " id='" + skillname + "-" + problemname + "-selected' onclick='toggleProblem(\"" + skillname + "\", \"" + pset + "\", \"" + problemname + "\")'>" +
              "</div>" +
              "</div>";
          }
        }
        skillcontainer.insertAdjacentHTML('beforeend', content);
    }

    for(const skillname in skills) {
      const cap = skills[skillname]['cap'];
      let content = "<div class='row'>" +
        "<div class='eight columns'>" + skillname + ": </div>" +
        //"<div class='four columns'><b><span id='" + skillname + "-total'>" + 0 + "</span></b> (<span id='" + skillname + "-overcap'>" + 0 + "</span>) / <b>" + cap + "</b></div>" +
        "<div class='four columns'><b><span id='" + skillname + "-total'>" + 0 + "</span> / " + cap + "</b> (<span id='" + skillname + "-overcap'></span> / " + skills[skillname].count + ")</div>" +
        "</div>";

        skilltotal_container.insertAdjacentHTML( 'beforeend', content);
    }
    update();
})();