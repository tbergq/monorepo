// @flow strict

export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Trainingjournal auth microservice',
    description: 'Handling users and auth for trainingjournal',
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT',
    },
  },
  host: __DEV__ ? 'localhost:4000' : 'trainingjournal-auth.now.sh',
  basePath: '/api',
  tags: [
    {
      name: 'Users',
      description: 'API for users in the system',
    },
  ],
  schemes: __DEV__ ? ['http'] : ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    '/users': {
      post: {
        tags: ['Users'],
        description: 'Create new user in system',
        parameters: [
          {
            name: 'user',
            in: 'body',
            description: 'User that we want to create',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        ],
        produces: ['application/json'],
        responses: {
          '201': {
            description: 'New user is created',
            schema: {
              $ref: '#/definitions/UserOutput',
            },
          },
        },
      },
    },
  },
  definitions: {
    User: {
      required: ['email', 'password', 'username'],
      properties: {
        email: {
          type: 'string',
          uniqueItems: true,
        },
        username: {
          type: 'string',
          uniqueItems: true,
        },
        password: {
          type: 'string',
        },
      },
    },
    UserOutput: {
      properties: {
        email: {
          type: 'string',
          uniqueItems: true,
        },
        username: {
          type: 'string',
          uniqueItems: true,
        },
        id: {
          type: 'string',
        },
      },
    },
  },
};