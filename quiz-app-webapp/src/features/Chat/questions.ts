export const questions = [
    {
        question: 'How to start the test?',
        answer: 'Click on the "Start Test" button, select the desired category, and follow the instructions.',
    },
    {
        question: 'How long will it take to complete the test?',
        answer: 'The duration depends on the number of questions. It usually takes between 5 and 15 minutes.',
    },
    {
        question: 'Can I skip a question?',
        answer: 'Yes, you can skip a question by clicking the "Skip" button (if this feature is available).',
    },
    {
        question: 'Can I save the test and continue later?',
        answer: 'Yes, you can save your progress and continue by accessing the "My Tests" section.',
    },
    {
        question: 'How can I find out the correct answers?',
        answer: 'After completing the test, you will see your results and the correct answers (if enabled in the test settings).',
    },
    {
        question: 'Do you have tests on topics like [e.g., history]?',
        answer: 'Yes, our catalog includes tests on history and many other topics. Select the "History" category in the menu.',
    },
    {
        question: 'How do I create my own test?',
        answer: 'Go to the "Create Test" section, add a title, description, questions, and answer options.',
    },
    {
        question: 'Can I make my test private?',
        answer: 'Yes, you can set access permissions to make your test available only to specific users.',
    },
    {
        question: 'What types of questions are supported?',
        answer: 'You can add multiple-choice questions, text-based questions, matching questions, or even file uploads.',
    },
    {
        question: 'Can I add an image or video to a test?',
        answer: 'Yes, you can attach images or video links to each question.',
    },
    {
        question: 'How do I share a test with others?',
        answer: 'Once the test is created, you will receive a unique link to share with others.',
    },
    {
        question: 'Is it possible to analyze test results?',
        answer: 'Yes, we provide statistics for each question as well as an overall analysis of the results.',
    },
];

export const questionsToSelect = () => questions?.map(({question}) => ({
    label: question,
    value: question,
}))
