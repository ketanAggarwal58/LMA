import {useState} from 'react';
import axios from 'axios';
import {Typography, Input, InputAdornment, Button, TextField} from '@mui/material/';
import { Quiz, AccountCircle } from "@mui/icons-material/";
import url from '../../../constants';

const NewQuizScreen = () => {

    const [quizName, setQuizName] = useState('')
    const [quizQuestion, setQuizQuestion] = useState('')
    const [quizAnswer1, setQuizAnswer1] = useState('')
    const [quizAnswer2, setQuizAnswer2] = useState('')
    const [quizAnswer3, setQuizAnswer3] = useState('')
    const [quizAnswer4, setQuizAnswer4] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [questionScore , setQuestionScore] = useState('')

    const postData = (e:any) => {
        e.preventDefault();
    
        axios.post(url+"quiz-question", {
          quizName,
          quizQuestion,
          quizAnswer1,
          quizAnswer2,
          quizAnswer3,
          quizAnswer4,
          correctAnswer,
          questionScore
          
        }).then(res => {
          console.log("posting Data", res)
          if(res.status == 200){
            alert('Added Successfully')
          }
        }).catch(error => console.log("Error: "+error))
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
                onChange={(e) => setQuizName(e.target.value)}
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
                onChange={(e) => setQuizQuestion(e.target.value)}
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
                onChange={(e) => setQuizAnswer1(e.target.value)}
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
                onChange={(e) => setQuizAnswer2(e.target.value)}
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
                onChange={(e) => setQuizAnswer3(e.target.value)}
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
                onChange={(e) => setQuizAnswer4(e.target.value)}
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
                onChange={(e) => setCorrectAnswer(e.target.value)}
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
                onChange={(e) => setQuestionScore(e.target.value)}
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
                    // postData();
                }}
                >
                Save
                </Button>
            </div>
        </div>
    )
}

export default NewQuizScreen;