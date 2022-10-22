const ghpages = require('gh-pages')

ghpages.publish(
	'dist',
	{
		repo: 'https://github.com/i575/myap.git',
	},
	err => {
		if (err) console.log(err)
	},
)
