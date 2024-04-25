/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: Username
 *         email:
 *           type: string
 *           description: Email
 *         password:
 *           type: string
 *           description: Password
 *           min: 8
 *       example:
 *         username: ivan
 *         email: test@test.com
 *         password: 12+5_*RF8
 *
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         password:
 *           type: string
 *           description: Password
 *           min: 8
 *       example:
 *         email: test@test.com
 *         password: 12+5_*RF8
 *
 *     User:
 *       type: object
 *       required:
 *         - uuid
 *         - email
 *         - username
 *         - dateCreated
 *         - dateUpdated
 *       properties:
 *         uuid:
 *           type: string
 *           description: Unique user id
 *         email:
 *           type: string
 *           description: Email
 *         username:
 *           type: string
 *           description: Username
 *         dateCreated:
 *           type: Date
 *           description: Date of user creation (Time zone should be converted)
 *         dateUpdated:
 *           type: Date
 *           description: Date of user update (Time zone should be converted)
 *       example:
 *         uuid: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         email: test@test.com
 *         username: Ivan Smith
 *         dateCreated: 2024-04-24T00:00:00.000Z
 *         dateUpdated: 2024-04-24T00:00:00.000Z
 *
 *     ResponseSuccess:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Successful message
 *       example:
 *         message: Action was successfully completed
 *     ResponseError:
 *       type: object
 *       properties:
 *         errors:
 *           type: array
 *           items:
 *              type: string
 *           description: List of error messages
 *       example:
 *         errors: ["Error 1", "Error 2"]
 */