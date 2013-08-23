function extendClass(cla,methods,Parent){
	cla.prototype = new Parent({});
	cla.prototype.constructor = cla;
	for( var prop in methods ){cla.prototype[prop] = methods[prop];}
}

function Class1(opts){
	var defaults = {
		name:'default name',
		age: 'deafult age'
	};
	this.opts = $.extend({},defaults,opts);
}
Class1.prototype = {
	getName:function(){
		return this.opts.name;
	},
	getAge:function(){
		return this.opts.age;
	}
};

function Class2(opts){
	Class1.call(this,opts);
}
var Class2Methods = {
	getName: function(){
		return this.opts.name+' Class2';
	}
};

extendClass(Class2, Class2Methods, Class1);