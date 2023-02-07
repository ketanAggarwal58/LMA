import http from "../http-comman";
import IAllQuizData from "../types/allQuiz";

const create = (data:IAllQuizData) => {
    return http.post<IAllQuizData>("", data);
}

const QuizService = {
    create
}

export default QuizService;