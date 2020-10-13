app.service('skillsService', function() {
  this.categories = [
      {
          id: 1,
          name:"Front",
          logo:"img/categories/front.png"
      },{
          id: 2,
          name:"Frameworks",
          logo:"img/categories/frameworks.png"
      },{
          id: 3,
          name:"Database",
          logo:"img/categories/database.png"
      },{
          id: 4,
          name:"Web Services",
          logo:"img/categories/webServices.png"
      },{
          id: 5,
          name:"Compiling",
          logo:"img/categories/compiling.png"
      },{
          id: 6,
          name:"Versioners",
          logo:"img/categories/versioners.png"
      },{
          id: 7,
          name:"Test",
          logo:"img/categories/test.png"
      },{
          id: 8,
          name:"Libraries",
          logo:"img/categories/libraries.png"
      },{
          id: 9,
          name:"Languages",
          logo:"img/categories/languages.png"
      },{
          id: 10,
          name:"Ides",
          logo:"img/categories/ides.png"
      },{
          id: 11,
          name:"Tools",
          logo:"img/categories/tools.png"
      }
  ];


  this.skills = [
        {
          idCategory: 1,
          name:"Jsp"
        },{
          idCategory: 1,
          name:"Bootstrap"
        },{
          idCategory: 1,
          name:"Materialize"
        },{
          idCategory: 1,
          name:"Angular Material"
        },{
          idCategory: 1,
          name:"Smart admin"
        },{
          idCategory: 1,
          name:"Zk"
        },{
          idCategory: 1,
          name:"Angular Js"
        },{
          idCategory: 1,
          name:"JQuery"
        },{
          idCategory: 1,
          name:"Ajax"
        },{
          idCategory: 1,
          name:"JackBe"
        },{
          idCategory: 1,
          name:"Css-Css3"
        },{
          idCategory: 1,
          name:"Mark Down"
        },{
          idCategory: 1,
          name:"Json"
        },{
          idCategory: 1,
          name:"Local storage"
        },{
          idCategory: 2,
          name:"Spring MVC"
        },{
          idCategory: 2,
          name:"Spring Security"
        },{
          idCategory: 2,
          name:"Spring Core"
        },{
          idCategory: 2,
          name:"Spring Boot"
        },{
          idCategory: 2,
          name:"Spring Data"
        },{
          idCategory: 2,
          name:"Struts"
        },{
          idCategory: 2,
          name:"Hibernate"
        },{
          idCategory: 3,
          name:"Oracle"
        },{
          idCategory: 3,
          name:"MySql"
        },{
          idCategory: 3,
          name:"SQLite"
        },{
          idCategory: 3,
          name:"Elastic search"
        },{
          idCategory: 4,
          name:"Rest"
        },{
          idCategory: 4,
          name:"SOAP"
        },{
          idCategory: 4,
          name:"JAX-WS"
        },{
          idCategory: 4,
          name:"Axis"
        },{
          idCategory: 4,
          name:"Apache CXF"
        },{
          idCategory: 4,
          name:"AWS SQS"
        },{
          idCategory: 4,
          name:"AWS S3"
        },{
          idCategory: 4,
          name:"JWT"
        },{
          idCategory: 5,
          name:"Maven"
        },{
          idCategory: 5,
          name:"Ant"
        },{
          idCategory: 6,
          name:"Git"
        },{
          idCategory: 6,
          name:"Svn"
        },{
          idCategory: 7,
          name:"JUnit"
        },{
          idCategory: 7,
          name:"DBUnit"
        },{
          idCategory: 7,
          name:"Mokito"
        },{
          idCategory: 7,
          name:"EasyMock"
        },{
          idCategory: 7,
          name:"PowerMock"
        },{
          idCategory: 8,
          name:"Lombok"
        },{
          idCategory: 8,
          name:"JasperReports"
        },{
          idCategory: 8,
          name:"Apache Velocity"
        },{
          idCategory: 8,
          name:"Mandril"
        },{
          idCategory: 8,
          name:"Java Concurrency"
        },{
          idCategory: 8,
          name:"Java Reflection"
        },{
          idCategory: 8,
          name:"Swagger"
        },{
          idCategory: 8,
          name:"Quartz"
        },{
          idCategory: 9,
          name:"Java 6,7,8"
        },{
          idCategory: 9,
          name:"Javascript"
        },{
          idCategory: 9,
          name:"Abap"
        },{
          idCategory: 9,
          name:"Php"
        },{
          idCategory: 9,
          name:".Net"
        },{
          idCategory: 9,
          name:"Ruby"
        },{
          idCategory: 9,
          name:"Python"
        },{
          idCategory: 10,
          name:"Eclipse"
        },{
          idCategory: 10,
          name:"IBM RAD"
        },{
          idCategory: 10,
          name:"NetBeans"
        },{
          idCategory: 10,
          name:"SAP Netweaver"
        },{
          idCategory: 10,
          name:"Xamarin Studio"
        },{
          idCategory: 10,
          name:"Visual Studio"
        },{
          idCategory: 10,
          name:"Atom"
        },{
          idCategory: 10,
          name:"Sublime Text"
        },{
          idCategory: 10,
          name:"Komodo"
        },{
          idCategory: 11,
          name:"Soap UI"
        },{
          idCategory: 11,
          name:"Postman"
        },{
          idCategory: 11,
          name:"JMeter"
        },{
          idCategory: 11,
          name:"Sonar"
        },{
          idCategory: 11,
          name:"Integrity"
        },{
          idCategory: 11,
          name:"MySQLWorkbench"
        },{
          idCategory: 11,
          name:"SequelPro"
        },{
          idCategory: 11,
          name:"Squirrel"
        },{
          idCategory: 11,
          name:"SQLDeveloper"
        },{
          idCategory: 11,
          name:"Source Tree"
        },{
          idCategory: 11,
          name:"New Relik"
        },{
          idCategory: 11,
          name:"Loggentries"
        },{
          idCategory: 11,
          name:"Slak"
        },{
          idCategory: 11,
          name:"Jira"
        },{
          id:75,
          idCategory: 11,
          name:"Bamboo"
        }
    ];

	this.getSkills = function() {
    return this.skills;
	};

  this.getSkillsByCategory = function(id) {
    if (isEmpty(id)) {
      return null;
    }
    var skillsSelected = [];
    for (var i in this.skills) {
      var item = this.skills[i];
      if (item.idCategory === id) {
        skillsSelected.push(item);
      }
    }
    return skillsSelected;
  };

	this.getCategories = function() {
    return this.categories;
	};

	this.getCategoryById = function(id) {
    if (isEmpty(id)) {
      return null;
    }
    for (var i in this.categories) {
      var item = this.categories[i];
      if (item.id === id) {
        return item;
      }
    }
    return null;
	};

});
