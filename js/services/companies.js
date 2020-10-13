app.service('companiesService', function() {
  this.items = [
      {
          id: 1,
          name:"Grupo sesicomp",
          profile:"lbl.webDeveloper",
          logo:"img/companies/gscomp.png",
          from:"2012/08",
          to:"2013/05"
      },{
          id: 2,
          name:"Stefanini",
          profile:"lbl.webDeveloper",
          logo:"img/companies/stefanini.png",
          from:"2013/08",
          to:"2014/06"
      },{
          id: 3,
          name:"Vector",
          profile:"lbl.webDeveloperAndLead",
          logo:"img/companies/vector.png",
          from:"2014/07",
          to:"2015/09"
      },{
          id: 4,
          name:"Openpay",
          profile:"lbl.webDeveloperAndLead",
          logo:"img/companies/openpay.png",
          from:"2015/10",
          to:"..."
      }
  ];

	this.get = function() {
    return this.items;
	};

	this.getById = function(id) {
    if (isEmpty(id)) {
      return null;
    }
    for (var i in this.items) {
      var item = this.items[i];
      if (item.id === id) {
        return item;
      }
    }
    return null;
	};

});

app.service('projectsService', function() {

  this.items = [,
      {
          company: 4,
          name:"Openpay Services",
          stack: [
            "Java 8",
            "Spring",
            "Hibernate",
            "MySql",
            "JUnit"
          ]
      },
      {
          company: 4,
          name:"Openpay Dashboard",
          stack: [
            "Java 8",
            "Spring",
            "Hibernate",
            "MySql",
            "ElasticSearch",
            "JUnit",
            "AngularJs",
            "JQuery",
            "Bootstrap"
          ]
      },
      {
          company: 4,
          name:"www.paynet.com.mx",
          stack: [
            "AngularJs",
            "Bootstrap"
          ]
      },
      {
          company: 4,
          name:"www.openpay.mx",
          stack: [
            "JQuery",
            "Bootstrap"
          ]
      },
      {
          company: 4,
          name:"www.iberiapluspuntosbancomer.mx",
          stack: [
            "Java 8",
            "Spring",
            "AngularJs",
            "JQuery",
            "Bootstrap"
          ]
      },
      {
          company: 3,
          name:"Enlace Pyme",
          stack: [
            "Java 6",
            "Spring",
            "JUnit",
            "Oracle"
          ]
      },
      {
          company: 3,
          name:"Front clientes - Opics",
          stack: [
            "Java 6",
            "Spring",
            "JUnit",
            "Oracle",
            "IBM Jack Be"
          ]
      },
      {
          company: 3,
          name:"Prototipo terminal financiero",
          stack: [
            "AngularJS",
            "JQuery",
            "Bootstrap"
          ]
      },
      {
          company: 3,
          name:"Politicas SAM",
          stack: [
            "Java 6",
            "Spring",
            "JUnit",
            "Oracle"
          ]
      },
      {
          company: 3,
          name:"Intranet Firmas Santander",
          stack: [
            "Java 6",
            "Spring",
            "JUnit",
            "Oracle"
          ]
      },
      {
          company: 2,
          name:"Banca Empresarial Transaccional",
          stack: [
            "Java 6",
            "Spring",
            "Oracle"
          ]
      },
      {
          company: 2,
          name:"Enlace RSA",
          stack: [
            "Java 6",
            "Spring",
            "JUnit",
            "Oracle"
          ]
      },
      {
          company: 1,
          name:"POS Retail Operations",
          stack: [
            "Java 7",
            "Spring",
            "Hibernate",
            "MySql",
            "Zk framework",
            "Maven"
          ]
      }
  ];

	this.get = function() {
    return this.items;
	};

	this.getByCompanyId = function(id) {
    if (isEmpty(id)) {
      return null;
    }
    for (var i in this.items) {
      var item = this.items[i];
      if (item.company === id) {
        return item;
      }
    }
    return null;
	};

});
