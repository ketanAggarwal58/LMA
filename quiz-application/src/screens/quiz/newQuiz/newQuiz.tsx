import {ChangeEvent, useState} from 'react';
import axios from 'axios';
import {Typography, Input, InputAdornment, Button, TextField} from '@mui/material/';
import { Quiz, AccountCircle } from "@mui/icons-material/";
import url from '../../../constants';
import IAllQuizData from '../../../types/allQuiz';

const NewQuizScreen = () => {

    const initialQuizState = {
        id: null,
        quizName: "",
        quizQuestion: "",
        quizAnswer1: "",
        quizAnswer2: "",
        quizAnswer3: "",
        quizAnswer4: "",
        correctAnswer: "",
        questionScore: ""
    }

    const [quiz, setQuiz] = useState<IAllQuizData>(initialQuizState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name , value} = event.target;
        setQuiz({...quiz, [name]: value});
    };

    const saveQuizQuestion = () => {
        var data = {
            quizName: quiz.quizName,
            quizQuestion: quiz.quizQuestion,
            quizAnswer1: quiz.quizAnswer1,
            quizAnswer2: quiz.quizAnswer2,
            quizAnswer3: quiz.quizAnswer3,
            quizAnswer4: quiz.quizAnswer4,
            correctAnswer: quiz.correctAnswer,
            questionScore: quiz.questionScore
        }

        console.log(data);
    }

    return (
        <div className="quiz">
            <div className="quizCard1">
                <Typography
                variant="h4"
                component="h2"
                style={{ textAlign: "center" }}
                sx={{
                    paddingTop: 3,
                    fontStyle: "italic",
                }}
                >
                Create New Quiz!
                </Typography>
                <Typography
                variant="subtitle1"
                component="h2"
                style={{ textAlign: "center" }}
                sx={{
                    paddingTop: 3,
                    fontStyle: "italic",
                }}
                >
                Quiz Details
                </Typography>
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                placeholder="Quiz Name"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                placeholder="Creators Email"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                placeholder="Quiz Topic"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Button
                variant="contained"
                size="small"
                sx={{
                    marginTop: 4,
                    fontSize: 12,
                    marginLeft: 17,
                }}
                >
                Save
                </Button>
            </div>
            <div className="quizCard2">
            <Typography
                variant="h4"
                component="h2"
                style={{ textAlign: "center" }}
                sx={{
                    paddingTop: 3,
                    fontStyle: "italic",
                }}
                >
                Create Quiz Questions!
                </Typography>
                <Typography
                variant="subtitle1"
                component="h2"
                style={{ textAlign: "center" }}
                sx={{
                    paddingTop: 3,
                    fontStyle: "italic",
                }}
                >
                Quiz Questions
                </Typography>
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizName}
                placeholder="Quiz Name"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizQuestion}
                placeholder="Quiz Question"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <br />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizAnswer1}
                placeholder="Answer 1"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizAnswer2}
                placeholder="Answer 2"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizAnswer3}
                placeholder="Answer 3"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.quizAnswer4}
                placeholder="Answer 4"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <br />
                <Input
                sx={{
                    marginTop: 4,
                    marginLeft: 9,
                }}
                onChange={handleInputChange}
                value={quiz.correctAnswer}
                placeholder="Correct Answer"
                id="input-user"
                startAdornment={
                    <InputAdornment position="start">
                    <Quiz />
                    </InputAdornment>
                }
                />
                <TextField
                id="filled-number"
                label="Question Score"
                type="number"
                onChange={handleInputChange}
                value={quiz.questionScore}
                sx={{marginTop: 3.5, marginLeft: 8}}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                />
                <Button
                variant="contained"
                size="small"
                sx={{
                    marginTop: 4,
                    fontSize: 12,
                    marginLeft: 17,
                }}
                onClick={() => {
                    saveQuizQuestion();
                }}
                >
                Save
                </Button>
            </div>
        </div>
    )
}

export default NewQuizScreen;