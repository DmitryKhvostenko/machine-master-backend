import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
	definition: {
		openapi: '3.0.0', 
		info: {
			title: 'API Documentation',
			version: '1.0.0',
			description: 'API Description',
		},
		servers: [
			{
				url: process.env.SERVER_URL || 'http://localhost:4444',
				description: 'Local server',
			},
		],
	},
	apis: ['./controllers/*.js'],
}

const specs = swaggerJsdoc(options)

export { swaggerUi, specs }
