var name = "Cassandra Eagleton";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["Forward thinking, Learning, Applying"];

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//if(bio.skills.length > 0){
	
//	$("#header").append(HTMLskillsStart);
	
//	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	
//	$("#skills").append(formattedSkill);
//	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//	$("#skills").append(formattedSkill);
//	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
//	$("#skills").append(formattedSkill);
//	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
//	$("#skills").append(formattedSkill);
//}

var bio = {
	"name" : "Cassandra",
	"role" : role,
	"contact" : {
		"mobile": "770-510-8098",
		"email": "clessex1211@gmail.com"
	},
	"picture" : "images/fry.jpg",
	"message" : "Welcome to my page",
	"skills" : skills
}

$("#main").append(bio.name);
$("#topContacts").append(bio.contact);

var work = {};
	work.position = "Jr Software Developer";
	work.employer = "WIKA";
	work.years = "13";
	work.city = "Atlanta, GA";
	work.description = "Develop desktop and web applications for the purposes of the business"
	
var projects = {
	"title": "something",
	"dates": "2015",
	"description": "something again",
	"images": "www.donthave.com"
}

for (position in work.position) {
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace
		("%data%", work.position[])
}

var formattedLocation = HTMLworkLocation.replace
		("%data%", work.jobs[job].loction);
		
	$(".work-entry:last").append(formattedLocation);

var education = {
	"schools": [
	{
		"name": "DeVry University",
		"city": "Atlanta, GA",
		"degree": "BS",
		"major": ["Technical Management"],
		"years": "2011-2013",
		"url": "www.devry.edu"
	}
  ],
	"onlineCourses": [
	{
		"title": "Front End Web Development",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
	}
  ]
}	

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
	$("#main").append(education.name);
	$("#main").append(work["position"]);