INSERT INTO quiz_quizscore(quizName, userEmail, quizScore, quizMaxScore) VALUES('Quiz 1', 'ketanaggarwal58@gmail.com', 20, 20)
SELECT * FROM quiz_quizscore;
SELECT quiz_quiz.id, quiz_quiz.quizName, quiz_quizscore.quizMaxScore FROM quiz_quiz INNER JOIN quiz_quizscore ON quiz_quiz.quizName = quiz_quizscore.quizName