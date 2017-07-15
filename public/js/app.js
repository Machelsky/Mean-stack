angular.module('speakup', []);


angular.module('speakup').controller('MainController', ctrlFunc);


function ctrlFunc() {
	this.message = 'Hello';

	this.people = [
	{
		name:'john doe'
	},
	{
		name:'jane doe'
	},
	{
		name:'john dd'
	}]
}