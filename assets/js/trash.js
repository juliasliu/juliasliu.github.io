// var app = angular.module('myApp', ['ngRoute']);
//
// app.controller('MainCtrl', [
// '$scope', '$sce',
// function($scope, $sce){
//
// 	$scope.headerUrl = "header.html";
// 	$scope.footerUrl = "footer.html";
  // 
	// var addWow = function() {
	// 	/* ADD ANIMATIONS WHEN SCROLLED */
	// 	$('#header, #footer, .background, .home-section, .title, .subtitle, .heading, a, .btn, .card, .slide, form').addClass('wow slow');
	// 	$('.about-section').attr('data-wow-delay', "1s");
	// 	$('#header, #footer').addClass('flipInX');
	// 	$('.home-section, .title, .subtitle, .heading, a, .btn, .card, .slide, form').addClass('fadeIn');
	// }
  //
	// var currentYear;
	// var setup = function () {
  // 		var date = new Date();
  // 	  currentYear = date.getFullYear();
	// 		$('#current-year').html(currentYear);
	// }
  //
	// // $scope.$on('$viewContentLoaded', function() {
	// 	addWow();
	// 	setup();
	// // });
  //
	// // Add user agent as an attribute on the <html> tag...
	// // Inspiration: https://css-tricks.com/ie-10-specific-styles/
	// var b = document.documentElement;
	// b.setAttribute('data-useragent', navigator.userAgent);
	// b.setAttribute('data-platform', navigator.platform);
  //
	// var changeSlide = function(index) {
	// 	console.log(index);
	// 	$('.slide-navbar-item').removeClass('active');
	// 	$('.slide-navbar-item#item' + index).addClass('active');
	// 	$('.slide').removeClass('active');
	// 	$('.slide#slide' + index).addClass('active');
	// }
  //
	// /* WORK */
	// var isFeatured = function (item) {
	//     return item.featured;
	// };
  //
	// var works = [
	// 	{
	// 		image: "public/img/projects/groot.png",
	// 		name: "gRoot",
	// 		url: "groot",
	// 		caption: "STEP Intern at Google",
	// 		date: "May 2020 - Aug 2020",
	// 		description: "Created a full stack web application “gRoot” that displays groups in the G Suite Admin Console using circle-packing, with interactive search and filtering options and editing functionality. Collaborated in a pod of 3 interns and 2 hosts in the Google Cloud Apps Core Admin SRE team and wrote a standard design document detailing project infrastructure and implementation. Used the Google Admin SDK Directory and Google Settings APIs, d3.js visualization library, Google Cloud Platform (GCP) App Engine, Apache Maven, and Jasmine unit testing framework.",
	// 		skills: "HTML, CSS, JavaScript, Google Admin SDK, Google Cloud Platform (GCP)",
	// 		links: [
	// 			{ title: "See website", url: "https://kwizu.herokuapp.com/", style: "website"},
	// 			{ title: "iOS app store", url: "https://apps.apple.com/us/app/dreamemo/id1524239390?ls=1", style: "ios"},
	// 			{ title: "Google Play", url: "https://kwizu.herokuapp.com/", style: "android"}
	// 			],
	// 		featured: true,
	// 	},
	// 	{
	// 		image: "public/img/projects/kwizu.png",
	// 		name: "Kwizu",
	// 		url: "kwizu",
	// 		caption: "Matching users based on personality, interests, and hobbies",
	// 		date: "Jan 2019 - Jul 2020",
	// 		description: "Built and released an iOS social media app where users can personalize profiles by taking personality quizzes, saving their results, and sharing them with friends. Future features include adding interests, and hobbies to profiles and creating an algorithm that evaluates similarities and compatibility between different users.",
	// 		skills: "HTML, CSS, React.js, Ruby on Rails, Heroku, React Native",
	// 		links: [
	// 			{ title: "See website", url: "https://kwizu.herokuapp.com/", style: "website"},
	// 			{ title: "iOS app store", url: "https://apps.apple.com/us/app/dreamemo/id1524239390?ls=1", style: "ios"},
	// 			{ title: "Google Play", url: "https://kwizu.herokuapp.com/", style: "android"}
	// 			],
	// 		featured: true,
	// 	},
	// 	{
	// 		image: "public/img/projects/dt.png",
	// 		name: "DiversaTech",
	// 		url: "dt",
	// 		caption: "STEP Intern at Google",
	// 		date: "Jan 2019 - present",
	// 		description: "Created a full stack web application “gRoot” that displays groups in the G Suite Admin Console using circle-packing, with interactive search and filtering options and editing functionality. Collaborated in a pod of 3 interns and 2 hosts in the Google Cloud Apps Core Admin SRE team and wrote a standard design document detailing project infrastructure and implementation. Used the Google Admin SDK Directory and Google Settings APIs, d3.js visualization library, Google Cloud Platform (GCP) App Engine, Apache Maven, and Jasmine unit testing framework.",
	// 		skills: "HTML, CSS, JavaScript, Google Admin SDK, Google Cloud Platform (GCP)",
	// 		links: [
	// 			{ title: "See website", url: "https://kwizu.herokuapp.com/", style: "website"},
	// 			{ title: "iOS app store", url: "https://apps.apple.com/us/app/dreamemo/id1524239390?ls=1", style: "ios"},
	// 			{ title: "Google Play", url: "https://kwizu.herokuapp.com/", style: "android"}
	// 			],
	// 		featured: true,
	// 	},
	// 	{
	// 		image: "public/img/projects/verze.png",
	// 		name: "Verze",
	// 		url: "verze",
	// 		caption: "Foreign-language learning with interactive exercises and community",
	// 		date: "Jun 2017 - Nov 2018",
	// 		description: "Verze is the perfect app for you to jumpstart on that language you always wanted to learn. With interactive flashcards that show the definition, pronunciation and visual representation of the phrase, responsive quizzes and games, and an online social community of users, Verze helps you learn the basics quickly, effortlessly, and joyfully.",
	// 		skills: "HTML, CSS, MongoDB, Express.js, Angular.js, Node.js, AWS, Ionic",
	// 		links: [
	// 			{ title: "See website", url: "http://www.verze.org", style: "website"},
	// 			{ title: "iOS app store", url: "https://itunes.apple.com/us/app/verze/id1314271545?ls=1&mt=8", style: "ios"}
	// 			],
	// 		featured: false,
	// 	},
	// 	{
	// 		image: "public/img/projects/dreamemo.png",
	// 		name: "Dreamemo",
	// 		url: "dreamemo",
	// 		caption: "Personal mood tracker and motivational dream journal",
	// 		date: "Apr 2016 - Oct 2017",
	// 		description: "Dreamemo is your personal dream journal where you can record daily entries about your dreams, feelings, and moods. Also equipped with beautiful backgrounds, soothing ambient sounds, and daily inspiring quotes, Dreamemo is your perfect helper in motivating you every day and helping you relax amid your stressful schedule. You can wake up to the beautiful waves of water caressing the shore or warm yourself up at the toasty fireplace.",
	// 		skills: "HTML, CSS, MongoDB, Express.js, Angular.js, Node.js, AWS, Ionic",
	// 		links: [
	// 			{ title: "See website", url: "https://dreamemo.github.io", style: "website"},
	// 			{ title: "iOS app store", url: "https://itunes.apple.com/us/app/dreamemo/id1248719800?ls=1&mt=8", style: "ios"}
	// 			],
	// 		featured: false,
	// 	},
//		{
//			image: "public/img/fbla.jpg",
//			name: "Project HATCH",
//			caption: "Market research, competitive analysis, promotional campaign for the high school target market",
//			captionColor: {color: "#EE7C00"},
//			time: "2016-2017",
//			description: "Cupertino FBLA’s Partnership with Business Project of 2016-2017, Project HATCH, partnered with Chegg, Inc., a growing online educational service company, to bring effective educational resources to high school students. I, as the project chair, led Project HATCH and its committees in completing five main goals to improve and promote Chegg among high school students and the community. Our project earned 3rd place at the FBLA State Leadership Conference and 6th place at the FBLA National Leadership Conference.",
//			links: [
//				{ title: "See project report", url: "public/reports/hatch.pdf", style: "report"}
//				]
//		},
//		{
//			image: "public/img/backgrounds/dining-table.jpeg",
//			name: "Four Leaf",
//			caption: "Online fresh and healthy food delivery platform with cultural menus",
//			captionColor: {color: "#BE525E"},
//			time: "2018",
//			description: "We created an online food-delivery platform that is not only profitable and efficient, but also uses fresh, ethical, high-quality products and caters towards different dietary needs of customers. At Four Leaf, our mission is to provide our customers with a spectacular variety of meals and ingredients with a dynamic twist. Our platform won 3rd place at the FBLA State Leadership Conference for California.",
//			links: [
//				{ title: "See presentation", url: "/", style: "report"},
//				]
//		},
//		{
//			image: "public/img/backgrounds/blank-business-composition.jpg",
//			name: "Coming soon",
//			caption: "check me out later",
//			captionColor: {color: "#00cc96"},
//			time: "2020",
//			description: "stay tuned!",
//			links: []
//		}
	];
// }])

// .controller('AboutCtrl', [
// '$scope',
// function($scope){
//
// 	var addWow = function() {
// 		/* ADD ANIMATIONS WHEN SCROLLED */
// 		$('.about-pic, .about-pic-container, .text').addClass('wow slow');
// 		$('.about-pic, .about-pic-container, .text').attr('data-wow-delay', ".5s");
// 		$('.about-pic, .about-pic-container').addClass('fadeInDown')
// 		$('.text').addClass('fadeInUp');
// 		$('.background.three').addClass('slideInLeft');
// 		$('.background.four').addClass('slideInDown');
// 	}
//
// 	var setup = function () {
//
// 	}
//
// 	$scope.$on('$viewContentLoaded', function() {
// 		addWow();
// 		setup();
// 	});
//
// 	/* RESUME ITEMS */
//
// 	/* EDUCATION */
// 	$scope.schools = [
// 		{ title: "University of California, Berkeley",
// 			degrees: ["B.A. in Computer Science", "B.S. in Business Administration"],
// 			year: "2022",
// 			image: "public/img/logos/berkeley.png",
// 			gpa: "3.8",
// 			courses: [
// 				{title: "CS 170", description: "efficient algorithms & problems"},
// 				{title: "CS 188", description: "artificial intelligence"},
// 				{title: "CS 61C", description: "computer architecture"},
// 				{title: "CS 61A", description: "structure & intrepretation of computers"},
// 				{title: "CS 61B", description: "data structures & algorithms"},
// 				{title: "CS 70", description: "discrete mathematics & probability theory"},
// 				{title: "EE 127", description: "optimization of engineering models"},
// 				{title: "EE 16A", description: "linear algebra + digital & circuit systems"},
// 				{title: "EE 16B", description: "designing information devices & systems"},
// 				{title: "DATA 8", description: "foundations of data science"},
// 				{title: "UGBA 88", description: "data and decisions"}
// 			]},
// 		{ title: "Cupertino High School",
// 		  degrees: [""],
// 		  year: "2018",
// 		  image: "public/img/logos/chs.png",
// 		  gpa: "3.93",
// 		  courses: [
// 			  {title: "AP Computer Science", description: ""},
// 			  {title: "AP Calculus BC", description: ""},
// 			  {title: "AP Physics I", description: ""},
// 			  {title: "AP Physics C", description: ""},
// 			  {title: "AP Statistics", description: ""},
// 			  {title: "AP US History", description: ""},
// 			  {title: "AP US Government", description: ""},
// 			  {title: "AP Microeconomics", description: ""},
// 			  {title: "AP Literature", description: ""},
// 			  {title: "AP Spanish", description: ""},
// 		  ]}
// 	];
//
// 	/* WORK */
// 	$scope.works = [
// 		{title: "Student Training in Engineering Program (STEP) Intern",
// 			location: "Google, Inc.",
// 			link: "https://www.google.com/",
// 			date: "May 2020 - Aug 2020",
// 			image: "public/img/logos/google.png",
// 			description: "Work with the Site Reliability Engineering (SRE) team of the Google Cloud apps department at Google to improve the workflow of engineers and ensure stability of production."
// 		},
// 		{title: "Management Intern",
// 			location: "Win-Kel, Inc.",
// 			link: "https://www.win-kel.com/",
// 			date: "Jun 2019 - Dec 2019",
// 			image: "public/img/logos/win-kel.png",
// 			description: "Work directly with the CEO of a 100,000+ user startup in the self-storage market. Wrote a competitive analysis and KPI report and interviewed all department heads. Created a database of 100+ investors and drafted pitch emails to raise seed funding."}
// 	];
//
// 	/* ORGS */
// 	$scope.orgs = [
// 		{title: "Teaching Assistant",
// 			location: "Web Design Decal Course Staff",
// 			link: "https://wdd.io/",
// 			date: "2019 - present",
// 			image: "public/img/logos/wdd.png",
// 			description: "Teach 150+ students web design and programming in HTML, CSS, and JavaScript, and visual design in Adobe XD and Figma through 3 hours of lectures/week. Responsible for holding weekly office hours and grading students’ projects."},
// 		{title: "VP of Marketing | Project Manager | Technology Consultant",
// 			location: "DiversaTech Consulting",
// 			link: "http://diversatech.org/",
// 			date: "2019 - present",
// 			image: "public/img/logos/diversatech.png",
// 			description: "Lead a data analytical and business research project to resolve issues in the inventory ticketing system at Sephora. Targeted and increased market presence in the Southeast Asian regions through competitive analysis and market research. Worked with Airbnb, Inc. to improve their host ID verification (IDV) process through interactive mobile app prototypes for bank and digital IDV."},
// 		{title: "VP of Program Operations",
// 			location: "UC LAUNCH Startup Accelerator",
// 			link: "https://www.uclaunch.com/",
// 			date: "2018 - 2020",
// 			image: "public/img/logos/launch.png",
// 			description: "Planned events for a startup accelerator that previously raised $67 million. Led a 24-hour hackathon with $1500 in prizes where startups were matched to stu- dents to work on engineering MVPs and refining business and marketing strategies. Wrote a 30-page funding and investment field guide as a resource for startups."},
// 		{title: "VP of Innovation",
// 			location: "AccelerateHer (Women Entrepreneurs at Berkeley)",
// 			link: "http://accelerateherberkeley.com/",
// 			date: "2019 - 2020",
// 			image: "public/img/logos/axh.png",
// 			description: "Oversee the innovation track, hosting the annual Startup Weekend in the fall and leading the AccelerateHer fellowship program for selected startup teams from Startup Weekend in the spring. Renovated the club website from scratch and helped market and rebrand the club."},
// 		{title: "Vice President | Partnership with Business Project Chair",
// 			location: "FBLA (Future Business Leaders of America)",
// 			date: "2014 - 2018",
// 			image: "public/img/logos/fbla.png",
// 			description: "Assisted with club operations, led the Mentorship & Networking program, and edited and compiled the Local Chapter Annual Business Report. Led a year-long chapter project with Chegg, Inc. Competed in state and national competitions such as E-Business and Business Communications. Taught entrepreneurship and finance and volunteered at workshops and fundraisers."},
// 		{title: "Co-President | Public Relations",
// 			location: "WIT (Women In Technology)",
// 			date: "2015 - 2018",
// 			image: "public/img/logos/wit.png",
// 			description: "Led Web Development track, creating websites for clubs and local businesses; Created club website using HTML, CSS, and JavaScript, club business card, promotional flyers, and social media graphics. Taught Scratch programming lessons to 4th and 5th graders at Sedgwick Elementary."},
// 		{title: "Webmaster",
// 			location: "NHS (National Honor Society)",
// 			link: "http://tinonhs.weebly.com/",
// 			date: "2015 - 2018",
// 			image: "public/img/logos/nhs.png",
// 			description: "Managed club website, events and credits tracker, and handled technology-related tasks. Assisted club operations, participated in club socials and activities. Contributed about 30 hours of volunteering."}
// 	];
//
// 	/* AWARDs */
// 	$scope.awards = [
// 		{org: "Upsilon Pi Epsilon (UPE)",
// 			title: "Top third of CS majors",
// 			year: "2020"},
// 		{org: "Rewriting the Code",
// 			title: "Fellowship Recipient",
// 			year: "2019"},
// 		{org: "Blackstone Launchpad & TechStars Startup Weekend",
// 			title: "1 of 4 Student Nominees",
// 			year: "2019"},
// 		{org: "FBLA Local Chapter Annual Business Report",
// 			title: "4th Place at States, 5th Place at Nationals",
// 			year: "2018"},
// 		{org: "FBLA E-Business",
// 			title: "3rd Place at States",
// 			year: "2018"},
// 		{org: "FBLA Business Communications",
// 			title: "2nd Place at Bay Section, 7th Place at States",
// 			year: "2018"},
// 		{org: "FBLA Partnership with Business Project",
// 			title: "6th Place at Nationals, 3rd Place at States",
// 			year: "2017"},
// 		{org: "FBLA Introduction to Information Technology",
// 			title: "8th Place at Bay Section",
// 			year: "2015"},
// 		{org: "FBLA Business Achievement Awards",
// 			title: "Future, Business",
// 			year: "2016"},
// 		{org: "Major League Hacking Hackathon",
// 			title: "Honorable Mention",
// 			year: "2016"}
// 	];
//
// 	$scope.leftAwards  = $scope.awards.slice(0, $scope.awards.length/2);
// 	$scope.rightAwards  = $scope.awards.slice($scope.awards.length/2, $scope.awards.length);
//
// 	/* SKILLS */
// 	$scope.skillTypes = [
// 		{type: "Programming",
// 			skills: [
// 				{title: "HTML/CSS/JavaScript", description: ""},
// 				{title: "Java", description: ""},
// 				{title: "Python", description: ""},
// 				{title: "C/C++", description: ""},
// 				{title: "React", description: ""},
// 				{title: "Ruby", description: ""},
// 				{title: "SQL", description: ""}
// 			]},
// 		{type: "Server/Framework",
// 			skills: [
// 				{title: "MEAN", description: "MongoDB, Express, Angular, Node.js"},
// 				{title: "Amazon Web Server", description: ""},
// 				{title: "Heroku", description: ""},
// 				{title: "Apple Developer", description: ""},
// 				{title: "Ionic", description: ""}
// 			]},
// 		{type: "Office",
// 			skills: [
// 				{title: "Microsoft Office", description: ""},
// 				{title: "Google Suite", description: ""}
// 			]},
// 		{type: "Design",
// 			skills: [
// 				{title: "Adobe Creative Suite", description: "Photoshop, InDesign, XD"},
// 				{title: "Figma", description: ""},
// 				{title: "Canva", description: ""},
// 				{title: "Final Cut Pro", description: ""}
// 			]},
// 		{type: "Languages",
// 			skills: [
// 				{title: "English", description: ""},
// 				{title: "Chinese", description: ""},
// 				{title: "Spanish", description: ""}
// 			]}
// 	]
//
// }])
//
// .controller('WorkCtrl', [
// '$scope',
// function($scope){
//
// 	var addWow = function() {
// 		/* ADD ANIMATIONS WHEN SCROLLED */
//
// 	}
//
// 	var setup = function () {
//
// 	}
//
// 	$scope.$on('$viewContentLoaded', function() {
// 		addWow();
// 		setup();
// 	});
//
// }])
//
// .controller('BlogCtrl', [
// '$scope', '$sce',
// function($scope, $sce){
//
// 	var addWow = function() {
// 		/* ADD ANIMATIONS WHEN SCROLLED */
// 		$('.title, .youtube-video, .twitter-timeline').addClass('wow slow');
// 		$('.title, .youtube-video, .twitter-timeline').attr('data-wow-delay', ".5s");
// 		$('.title').addClass('fadeInDown');
// 		$('.youtube-video, .twitter-timeline').addClass('fadeIn');
// 	}
//
// 	var setup = function () {
// 		var channelID = "UCZQ0Gl73SnW2piK379_e0DA";
// 		var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
// 		$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
// 			var link = data.items[0].link;
// 			var id = link.substr(link.indexOf("=")+1);
// 			var url = "https://youtube.com/embed/"+ id + "?showinfo=0&rel=0";
// 			$scope.videoSrc = $sce.trustAsResourceUrl(url);
// 			$("#youtube_video").attr("src", url);
//
// 			var videoWidth = $(window).width() / 2;
// 			var videoHeight = videoWidth * 360/640;
// 			$(".blog .youtube-video").css( "width", videoWidth + "px" );
// 			$(".blog .youtube-video").css( "height", videoHeight + "px" );
// 			$scope.videoStyle = { "height": videoHeight + "px", "width": videoWidth + "px" };
// 		});
//
// 		// LOAD THE JAVASCRIPT FOR TWITTER EMBEDDED IFRAME
// 		var script = document.createElement('script');
// 		script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
// 		script.setAttribute('type', 'text/javascript');
// 		document.getElementsByTagName('head')[0].appendChild(script);
//
// 		// LOAD THE JAVASCRIPT FOR MEDIUM EMBED
// //		script.setAttribute('src', 'https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js');
// //		document.getElementsByTagName('head')[0].appendChild(script);
//
// 		setTimeout(function() {
// 			/*
// 			 * .blog .twitter .twitter-timeline {
// 					width: 50%;
// 					box-shadow: 0 3px 10px rgba(0,0,0,.25);
// 				}
//
// 				.blog .twitter .twitter-timeline .SandboxRoot.env-bp-970 .timeline-Header-title {
// 					font-size: 24px;
// 				}
//
// 				.blog .twitter .twitter-timeline .SandboxRoot.env-bp-970 .timeline-Tweet-text {
// 					font-size: 16px;
// 				    line-height: 20px;
// 				    margin-bottom: 0;
// 				}
//
// 				.blog .twitter .twitter-timeline .u-linkBlend {
// 					font-size: 14px;
// 				}
// 			 */
// 			$('.twitter-timeline').css({"width": "33.333%", "box-shadow": "0 3px 10px rgba(0,0,0,.25)"});
// 			if ( $('[id*=twitter]').length ) {
// 				$('[id*=twitter]').each( function(){
// 					var ibody = $(this).contents().find( 'body' );
// 					ibody.find('.timeline-Header-title').css({"font-size": "1.5em"});
// 					ibody.find('.timeline-Tweet-text').css({"font-size": "1em", "line-height": "1.15em", "margin-bottom": "0px"});
// 					ibody.find('.u-linkBlend').css({"font-size": "1em"});
// 				});
// 			}
// 		}, 2000)
// 	}
//
// 	$scope.$on('$viewContentLoaded', function() {
// 		addWow();
// 		setup();
// 	});
// }])
//
// .controller('ContactCtrl', [
// '$scope', '$sce',
// function($scope, $sce) {
//
// 	var addWow = function() {
// 		/* ADD ANIMATIONS WHEN SCROLLED */
//
// 	}
//
// 	var setup = function () {
//
// 	}
//
// 	$scope.$on('$viewContentLoaded', function() {
// 		addWow();
// 		setup();
// 	});
//
// }]);
//
// app.config([
// '$routeProvider',
// function($routeProvider) {
//
// 	$routeProvider
//     .when("/", {
//         templateUrl : "public/views/home.html",
//         controller: "MainCtrl"
//     })
//     .when("/about", {
//         templateUrl : "public/views/about.html",
//         controller: "AboutCtrl"
//     })
//     .when("/work", {
//         templateUrl : "public/views/work.html",
//         controller: "WorkCtrl"
//     })
//     .when("/groot", {
//         templateUrl : "public/views/projects/groot.html",
//         controller: "WorkCtrl"
//     })
//     .when("/kwizu", {
//         templateUrl : "public/views/projects/kwizu.html",
//         controller: "WorkCtrl"
//     })
//     .when("/dt", {
//         templateUrl : "public/views/projects/dt.html",
//         controller: "WorkCtrl"
//     })
//     .when("/verze", {
//         templateUrl : "public/views/projects/verze.html",
//         controller: "WorkCtrl"
//     })
//     .when("/dreamemo", {
//         templateUrl : "public/views/projects/dreamemo.html",
//         controller: "WorkCtrl"
//     })
//     .when("/blog", {
//         templateUrl : "public/views/blog.html",
//         controller: "BlogCtrl"
//     })
//     .when("/contact", {
//         templateUrl : "public/views/contact.html",
//         controller: "ContactCtrl"
//     })
//     .otherwise({ redirectTo: '/'});
// }]);

// about slides
//		var activeSlide = $('.slide.active');
//		var id = 1;
//		activeSlide.css('z-index','0');
//		var runner = function() {
//			if (id < 4) id++;
//			else id = 1;
//			$('.slide').removeClass('active');
//			$('.slide#' + id).addClass('active');
//			activeSlide = $('.slide.active');
//			setTimeout(function() {
//				runner();
//			}, 5000);
//
//			var dt = new Date();
//	        document.getElementById('current-year').innerHTML = dt.getFullYear();
//		}
//		setTimeout(function() { runner(); }, 5000);
//	/* SLIDER FOR ART */
//	if($(".bxslider").length != 0) {
//		$(".bxslider").ready(function() {
//			$('.bxslider').bxSlider({
//				minSlides: 1,
//				maxSlides: 1,
//				slideWidth: 360,
//				slideMargin: 10
//			});
//		})
//	}
//
//	$scope.scrnIndex = 1;
//	$scope.prev = function() {
//		$scope.scrnIndex--;
//		if($scope.scrnIndex == 0) $scope.scrnIndex = 5;
//		$scope.showScrn($scope.scrnIndex);
//	}
//	$scope.next = function() {
//		$scope.scrnIndex++;
//		if($scope.scrnIndex == 6) $scope.scrnIndex = 1;
//		$scope.showScrn($scope.scrnIndex);
//	}
//	$scope.showScrn = function(index) {
//		$('.screenshot').removeClass("active");
//		if(index == 1) $('#scrn1').addClass("active");
//		else if(index == 2) $('#scrn2').addClass("active");
//		else if(index == 3) $('#scrn3').addClass("active");
//		else if(index == 4) $('#scrn4').addClass("active");
//		else if(index == 5) $('#scrn5').addClass("active");
//	}
//	$(document).ready(function popup() {
//		var org;
//		do{
//			org = prompt("In order to gain access, please enter the correct given password:", "");
//		}while(org == null || org == "" || (org != "chs1718" && org != "uc1718" && org != "uiuc1718"
//			&& org != "udub1718" && org != "calpoly1718" && org != "usc1718" && org != "purdue1718"
//				&& org != "columbia1718" && org != "princeton1718" && org != "cmu1718" && org != "mit1718"
//					&& org != "cornell1718" && org != "stanford1718" && org != "caltech" && org != "upenn1718"));
//
//		console.log(org);
//	})

	// HTML5 audio player + playlist controls...
	// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
	// Mythium Archive: https://archive.org/details/mythium/
//	if($(".container").length != 0) {
//		$(".container").ready(function() {
//			jQuery(function ($) {
//			    var supportsAudio = !!document.createElement('audio').canPlayType;
//			    if (supportsAudio) {
//			        var index = 0,
//			            playing = false,
//			            mediaPath = 'public/audio/',
//			            extension = 'm4a',
//			            tracks = [{
//			                "track": 1,
//			                "name": "Fantasie-Impromptu - Chopin",
//			                "length": "4:53",
//			                "file": "f"
//			            }, {
//			                "track": 2,
//			                "name": "Toccata - Khachaturian",
//			                "length": "8:31",
//			                "file": "t"
//			            }, {
//			                "track": 3,
//			                "name": "Prelude in C# Major - ",
//			                "length": "1:34",
//			                "file": "p"
//			            }, {
//			                "track": 4,
//			                "name": "Sonata - ",
//			                "length": "4:05",
//			                "file": "s"
//			            }, {
//			                "track": 5,
//			                "name": "Etude Op. 2, No. 1 - ",
//			                "length": "2:30",
//			                "file": "e"
//			            }],
//			            buildPlaylist = $.each(tracks, function(key, value) {
//			                var trackNumber = value.track,
//			                    trackName = value.name,
//			                    trackLength = value.length;
//			                if (trackNumber.toString().length === 1) {
//			                    trackNumber = '0' + trackNumber;
//			                } else {
//			                    trackNumber = '' + trackNumber;
//			                }
//			                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div></div></li>');
//			            }),
//			            trackCount = tracks.length,
//			            npAction = $('#npAction'),
//			            npTitle = $('#npTitle'),
//			            audio = $('#audio1').bind('play', function () {
//			                playing = true;
//			                npAction.text('Now Playing...');
//			            }).bind('pause', function () {
//			                playing = false;
//			                npAction.text('Paused...');
//			            }).bind('ended', function () {
//			                npAction.text('Paused...');
//			                if ((index + 1) < trackCount) {
//			                    index++;
//			                    loadTrack(index);
//			                    audio.play();
//			                } else {
//			                    audio.pause();
//			                    index = 0;
//			                    loadTrack(index);
//			                }
//			            }).get(0),
//			            btnPrev = $('#btnPrev').click(function () {
//			                if ((index - 1) > -1) {
//			                    index--;
//			                    loadTrack(index);
//			                    if (playing) {
//			                        audio.play();
//			                    }
//			                } else {
//			                    audio.pause();
//			                    index = 0;
//			                    loadTrack(index);
//			                }
//			            }),
//			            btnNext = $('#btnNext').click(function () {
//			                if ((index + 1) < trackCount) {
//			                    index++;
//			                    loadTrack(index);
//			                    if (playing) {
//			                        audio.play();
//			                    }
//			                } else {
//			                    audio.pause();
//			                    index = 0;
//			                    loadTrack(index);
//			                }
//			            }),
//			            li = $('#plList li').click(function () {
//			                var id = parseInt($(this).index());
//			                if (id !== index) {
//			                    playTrack(id);
//			                }
//			            }),
//			            loadTrack = function (id) {
//			                $('.plSel').removeClass('plSel');
//			                $('#plList li:eq(' + id + ')').addClass('plSel');
//			                npTitle.text(tracks[id].name);
//			                index = id;
//			                audio.src = mediaPath + tracks[id].file + extension;
//			            },
//			            playTrack = function (id) {
//			                loadTrack(id);
//			                audio.play();
//			            };
//			        extension = audio.canPlayType('audio/mpeg') ? '.m4a' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
//			        loadTrack(index);
//			    }
//			});
//		})
//	}
