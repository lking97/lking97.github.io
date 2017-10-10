var bio = {
    "name": "Lloyd King",
    "role": "Web Designer", //My biography
    "contacts": {
        "mobile": "707-631-9953",
        "email": "lking3497@gmail.com",
        "github": "lking97",
        "location": "Suisun City, CA",
    },
    "welcomeMessage": "Welcome All Kaioshins!!!! (Kaioshin is from an anime.) I am an aspiring to become a web designer. I have experience with multiple programming languages and I like to design web pages. I also love video games and anime!",
    "skills": [
        "HTML5", "CSS3", "JavaScript", "C++", "Visual Basic", "Photoshop", "Anime Connoisseur"
    ],
    "biopic": "images/LloydKing.PNG",
};

bio.display = function() { "use strict";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName, formattedRole);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBiopic, formattedMsg);

for (var indexCount = 0; indexCount < formattedContactInfo.length; indexCount++) {
    $("#topContacts, #footerContacts").append(formattedContactInfo[indexCount]);
}

$("#header").append(HTMLskillsStart);

var formattedSkill = [];
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[0]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[1]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[2]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[3]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[4]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[5]));
formattedSkill.push(HTMLskills.replace("%data%", bio.skills[6]));

formattedSkill.forEach(function(indexCount){
$("#skills").append(indexCount);
});
};

bio.display();


var work = {
    "jobs": [{
            "employer": "Geek Squad", //work experience
            "title": "Consultation Agent",
            "location": "1547 Gateway Blvd, Fairfield, CA",
            "dates": "March 26, 2017 - Present",
            "description": "A Geek Squad Consultation Agent is a brand ambassador for both the Geek Squad and Best Buy brands. As the solutions expert, the Consultation Agent manages the Geek Squad check-in and check-out experience for customers and helps them find the complete solution that works for them. They coach the sales team, building trust and explaining services and technology to help meet all customer needs. Their knowledge of services, technology and business group strategies in partnership with the sales team ensures no customer is ever left unserved or underserved."
        }]
    };


work.display = function() {
    "use strict";
 if (work.jobs.length > 0) {
    var len = work.jobs.length;
      for (var job = 0; job < len; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
      }
    }
};

work.display();



var education = {
    "schools": [{
        "name": "Solano Community College", //my education
        "location": "Fairfield, CA",
        "degree": "Associates",
        "majors": ["Scientific and Quantitative Reasoning", "Computer Engineering"],
        "dates": "2015-2017",
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree Program",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/"
    }]
};

education.display = function() { "use strict";
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {

        var len = education.schools.length;
        for (var school = 0; school < len; school++) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);

            var mLen = education.schools[school].majors.length;
            for (var major = 0; major < mLen; major++) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);

          $('.education-entry:last').append(formattedMajor);
            }
        }

            $("#education").append(HTMLonlineClasses);

            var oLen = education.onlineCourses.length;

            for (var online = 0; online < oLen; online++) {
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).replace('#', education.onlineCourses[online].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
                var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(formattedTitleSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineURL);

        }

    }
};

education.display();

var projects = {
    "projects": [{
        "title": "Portfolio Website",
        "dates": "2017",
        "description": "A responsive website showcasing knowledge and skill with html, css, and bootstrap.",
        "images": [
            "images/Responsive.PNG",
            "images/Responsive1.PNG"
        ]
    }]
};

projects.display = function() { "use strict";
    if (projects.projects.length > 0) {
        var pLen = projects.projects.length;
      for (var project = 0; project < pLen; project++) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);

        var iLen = projects.projects[project].images.length;
        for (var image = 0;  image < iLen; image++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

          $('.project-entry:last').append(formattedImage);
        }
      }
    }
};

projects.display();
$("#mapDiv").append(googleMap);