function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			description: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name</div>',
				'<div ng-transclude="name"></div>',
				'<div>Position</div>',
				'<div ng-transclude="position"></div>',
				'<div>Description</div>',
				'<div ng-transclude="description"></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);