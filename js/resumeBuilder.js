var bio = {
	"name" : "Cassandra Eagleton",
	"role" : "Web Developer",
	"contacts" : {
		"mobile": "770-555-8098",
		"email": "clessex1211@gmail.com",
		"location": "GA"
	},
	"bioPic" : "images/pic.jpg",
	"welcomeMessage" : "Welcome to my page",
	"skills" : ["Forward thinking", "Learning", "Applying", "Organizing"]
};

var work = {
	"jobs": [
	{
		"employer": "WIKA",
		"title": "Jr Software Developer",
		"dates": "2014-current",
		"location": "Atlanta, GA",
		"description": "Develop desktop and web applications for the purposes of the business"
	},
	{
		"employer": "WIKA",
		"title": "Business Analyst - Finance",
		"dates": "2002-2014",
		"location": "Atlanta, GA",
		"description": "Analysis of business financial performance"
	}
  ] 
};

var projects = {
	"project": [
	{
		"title": "Ecommerce",
		"dates": "2015",
		"description": "Developed and designed a web based ecommerce application",
		"images": ["images/gaugebeach.jpg"]
	},
	{
		"title": "something else",
		"dates": "2015",
		"description": "something else again",
		"images": ["images/gaugebeach.jpg"]
	}
  ]
};

var education = {
	"schools": [
	{
		"name": "DeVry University",
		"location": "Atlanta, GA",
		"degree": "BS",
		"major": "Technical Management",
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
};	

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);
var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);
var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);
var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedLocation,formattedDescription);
	}
};

projects.display = function() {
	for(project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[project].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
	}
};

education.display = function() {
		
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			 
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

work.display();
projects.display();
education.display();
bio.display();

$("#mapDiv").append(googleMap);