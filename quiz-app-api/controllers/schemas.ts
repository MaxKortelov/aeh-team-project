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
 *     Email:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *       example:
 *         email: test@test.com
 *
 *     ResetPassword:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         password:
 *           type: string
 *           description: Password
 *           min: 8
 *         token:
 *           type: string
 *           description: Unique token generated by backend
 *       example:
 *         email: test@test.com
 *         password: 12+5_*RF8
 *         token: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     VerifyEmail:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         token:
 *           type: string
 *           description: Unique token generated by backend
 *       example:
 *         email: test@test.com
 *         token: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     NewAnswer:
 *       type: object
 *       required: true
 *       properties:
 *         id:
 *           type: string
 *           description: Unique id of the answer
 *         text:
 *           type: string
 *           description: answer text
 *       example:
 *         id: 1
 *         text: What is the smallest planet in sonar system?
 *
 *     NewQuiz:
 *       type: object
 *       required: true
 *       properties:
 *         quizType:
 *           type: string
 *           description: Type of the quiz
 *         questions:
 *           type: arr
 *           items:
 *             $ref: '#/components/schemas/NewAnswer'
 *           description: list of answers
 *       example:
 *         quizType: Cosmic quiz
 *         questions: [{id: 1, text: What is the smallest planet in sonar system?}]
 *
 *     QuizType:
 *       type: object
 *       required: true
 *       properties:
 *         uuid:
 *           type: string
 *           description: Unique id of the quiz type
 *         description:
 *           type: string
 *           description: Name of the quiz type
 *       example:
 *         uuid: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         description: Cosmic quiz
 *
 *     GenerateQuizSession:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         quizTypeId:
 *           type: string
 *           description: Quiz type unique id
 *       example:
 *         email: test@test.com
 *         quizTypeId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     QuizSessionInfo:
 *       type: object
 *       required: true
 *       properties:
 *         quizSessionId:
 *           type: string
 *           description: Quiz session unique id
 *         questionAmount:
 *           type: number
 *           description: Number of questions
 *         quizDuration:
 *           type: number
 *           description: Time session will be available in minutes
 *         quizAttempts:
 *           type: number
 *           description: Number of attempts
 *         quizAttemptsUsed:
 *           type: number
 *           description: Number of attempts that are used
 *         dateCreated:
 *           type: Date
 *           description: Date, when quiz session was generated (Time zone should be converted)
 *       example:
 *         quizSessionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         questionAmount: 10
 *         quizDuration: 30
 *         quizAttempts: 10
 *         quizAttemptsUsed: 1
 *         dateCreated: 2024-04-24T00:00:00.000Z
 *
 *     QuizData:
 *       type: object
 *       required: true
 *       properties:
 *         question:
 *           $ref: '#/components/schemas/QuizQuestion'
 *         dateStarted:
 *           type: Date
 *           description: Date, when new quiz session was started (Time zone should be converted)
 *         dateEnded:
 *           type: Date
 *           description: Date, when quiz session was ended (Time zone should be converted)
 *         currentQuestionCount:
 *           type: number
 *           description: Index of current questions (Starts from 1)
 *         questionsAmount:
 *           type: number
 *           description: Number of questions in quiz session
 *       example:
 *         question: {questionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1, question: What is the smallest planet in solar system?, answers: [{id: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1, text: Earth}], quizType: Cosmic quiz}
 *         dateStarted: 2024-04-24T00:00:00.000Z
 *         dateEnded: 2024-04-24T00:30:00.000Z
 *         currentQuestionCount: 10
 *         questionsAmount: 1
 *
 *     QuizQuestion:
 *       type: object
 *       required: true
 *       properties:
 *         questionId:
 *           type: string
 *           description: Unique question id
 *         question:
 *           type: string
 *           description: Question of specific quiz
 *         answers:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/NewAnswer'
 *         quizType:
 *           type: string
 *           description: Name of quiz type
 *       example:
 *         questionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         question: What is the smallest planet in solar system?
 *         answers: [{id: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1, text: Earth}]
 *         quizType: Cosmic quiz
 *
 *     StartQuizSession:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         quizSessionId:
 *           type: string
 *           description: Unique quiz session id
 *       example:
 *         email: test@test.com
 *         quizSessionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     SubmitQuiz:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         quizSessionId:
 *           type: string
 *           description: Unique quiz session id
 *       example:
 *         email: test@test.com
 *         quizSessionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     QuizResult:
 *       type: object
 *       required: true
 *       properties:
 *         quizSessionId:
 *           type: string
 *           description: Unique quiz session id
 *         result:
 *           type: string
 *           description: Percentage of correct answers
 *       example:
 *         quizSessionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         result: "80%"
 *
 *     SaveQuizQuestion:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *           description: Email
 *         quizSessionId:
 *           type: string
 *           description: Unique quiz session id
 *         questionId:
 *           type: string
 *           description: Unique question id
 *         answerId:
 *           type: string
 *           description: Unique answer id
 *       example:
 *         email: test@test.com
 *         quizSessionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         questionId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *         answerId: 5a66d6f4-9d08-45d8-8a43-1ce148cbebd1
 *
 *     ResponseSuccess:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Successful message
 *       example:
 *         message: Action was successfully completed
 *
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