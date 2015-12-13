"use strict";define("emberblog/app",["exports","ember","ember/resolver","ember/load-initializers","emberblog/config/environment"],function(e,n,t,r,o){var i=void 0;n["default"].MODEL_FACTORY_INJECTIONS=!0,i=n["default"].Application.extend({modulePrefix:o["default"].modulePrefix,podModulePrefix:o["default"].podModulePrefix,Resolver:t["default"]}),(0,r["default"])(i,o["default"].modulePrefix),e["default"]=i}),define("emberblog/components/app-version",["exports","ember-cli-app-version/components/app-version","emberblog/config/environment"],function(e,n,t){var r=t["default"].APP.name,o=t["default"].APP.version;e["default"]=n["default"].extend({version:o,name:r})}),define("emberblog/controllers/array",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("emberblog/controllers/object",["exports","ember"],function(e,n){e["default"]=n["default"].Controller}),define("emberblog/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","emberblog/config/environment"],function(e,n,t){e["default"]={name:"App Version",initialize:(0,n["default"])(t["default"].APP.name,t["default"].APP.version)}}),define("emberblog/initializers/export-application-global",["exports","ember","emberblog/config/environment"],function(e,n,t){function r(){var e=arguments[1]||arguments[0];if(t["default"].exportApplicationGlobal!==!1){var r,o=t["default"].exportApplicationGlobal;r="string"==typeof o?o:n["default"].String.classify(t["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("emberblog/router",["exports","ember","emberblog/config/environment"],function(e,n,t){var r=n["default"].Router.extend({location:t["default"].locationType});r.map(function(){}),e["default"]=r}),define("emberblog/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.11",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"emberblog/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),r},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("emberblog/config/environment",["ember"],function(e){var n="emberblog";try{var t=n+"/config/environment",r=e["default"].$('meta[name="'+t+'"]').attr("content"),o=JSON.parse(unescape(r));return{"default":o}}catch(i){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("emberblog/app")["default"].create({name:"emberblog",version:"0.0.0+b22cec4b"});