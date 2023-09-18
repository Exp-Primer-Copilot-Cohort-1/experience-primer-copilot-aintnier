function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsButton = document.getElementById("memberSkillsButton");
  var memberSkillsButtonIcon = document.getElementById("memberSkillsButtonIcon");
  var memberSkillsButtonIconClass = memberSkillsButtonIcon.classList;
  if (memberSkills.style.display === "none") {
    memberSkills.style.display = "block";
    memberSkillsButtonIconClass.remove("fa-plus");
    memberSkillsButtonIconClass.add("fa-minus");
  } else {
    memberSkills.style.display = "none";
    memberSkillsButtonIconClass.remove("fa-minus");
    memberSkillsButtonIconClass.add("fa-plus");
  }
}