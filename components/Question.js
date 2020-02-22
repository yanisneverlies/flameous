import styled from "styled-components";
import { Row, Typography, Radio, Alert } from "antd";
const { Title } = Typography;

function Question({ question, answers, ...rest }) {
  const [isAnswered, setAnswered] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const handleAnswer = e => {
    const { value } = e.target;
    setAnswered(true);
    const answer = answers.find(answer => answer.id === value);
    const isAnswerCorrect = answer.isCorrect;
    const answerComment = answer.comment;

    setCorrect(isAnswerCorrect);
    setComment(answerComment);
    rest.updateCounter(++rest.counter)
    if (isAnswerCorrect) {
      rest.updateCorrectCounter(++rest.correctAnswers)
    }
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  };

  return (
    <Wrapper>
      <Title level={3}>{question}</Title>
      <Radio.Group onChange={handleAnswer} disabled={isAnswered}>
        {answers.map(element => {
          return (
            <Radio key={element.id} style={radioStyle} value={element.id}>
              {element.answer}
            </Radio>
          );
        })}
      </Radio.Group>
      <AnswerWrapper>
        <Row>
          {isAnswered &&
            (isCorrect ? (
              <Alert message={comment} type='success' showIcon />
            ) : (
              <Alert message={comment} type='error' showIcon />
            ))}
        </Row>
      </AnswerWrapper>
    </Wrapper>
  );
}

export default Question;

const Wrapper = styled.div`
  margin: 24px 0;
`;

const AnswerWrapper = styled.div`
  margin-top: 12px;
`
