import {Typography, Input, InputAdornment, Button, TextField} from '@mui/material/';
import { Lock, Quiz } from "@mui/icons-material/";

const NewQuizScreen = () => {
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
                    <Quiz />
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
          label="Number"
          type="number"
          sx={{marginTop: 1, marginLeft: 8}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
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
        </div>
    )
}

export default NewQuizScreen;