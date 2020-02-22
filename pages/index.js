import styled from "styled-components";
import { Row, Typography, Button, Divider } from "antd";
import Question from "../components/Question";
import Card from "../components/Card";
import { useEffect } from "react";

const { Title, Paragraph, Text } = Typography;

const data = [
  {
    id: 1,
    question: "Начну с простого: Вы фанзиль?",
    answers: [
      {
        id: 1,
        answer: "Да",
        comment: "Пизда. Фанзиль не открылся бы так легко.",
        isCorrect: false
      },
      {
        id: 2,
        answer: "Нет",
        comment: "Неплохо. Продолжаем.",
        isCorrect: true
      }
    ]
  },
  {
    id: 2,
    question:
      "Вы поссорились со своей девушкой, спустя какое-то время вы разговариваете на улице и она говорит, что ей холодно. Ваши действия?",
    answers: [
      {
        id: 1,
        answer: "Предложу свою куртку / обниму её.",
        comment: "Похоже, что у вас нет ни единого шанса сдать этот тест.",
        isCorrect: false
      },
      {
        id: 2,
        answer:
          "Предложу ей пойти вон в то соседнее здание, там наверняка теплее.",
        comment:
          "Абсолютно верно. Законы романтики неведомы человеку рациональности.",
        isCorrect: true
      }
    ]
  },
  {
    id: 3,
    question:
      "Вы упарываете ЛСД в кругу друзей, внезапно один из них решает залезть на шкаф. Как вы себя чувствуете?",
    answers: [
      {
        id: 1,
        answer: "Скорее всего, он агрессивен и хочет избить именно меня",
        comment: "В яблочко. Прямо сейчас у вас кошмарнейший бэдтрип",
        isCorrect: true
      },
      {
        id: 2,
        answer: "Нет никаких причин переживать — он не причинит никому вреда.",
        comment: "Очень наивное предположение, если вы — фанзиль.",
        isCorrect: false
      }
    ]
  },
  {
    id: 4,
    question: "Вы ложитесь спать. О чём вы думаете перед сном?",
    answers: [
      {
        id: 1,
        answer:
          "Думаю о том, что хорошего со мной будет в будущем; о том, как прошёл день",
        comment: "Ответ отрицательный. Фанзиль НИКОГДА не думает о хорошем.",
        isCorrect: false
      },
      {
        id: 2,
        answer:
          "Думаю о том, насколько ужасно забвение после смерти; о человеческой темпоральности и ничтожности",
        comment:
          "Верно. Нельзя ложиться спать без ночного приступа тревожности.",
        isCorrect: true
      }
    ]
  },
  {
    id: 5,
    question:
      "К вам домой приходят близкие друзья, чтобы поиграть в настольные игры. В какой-то момент вы понимаете, что проигрываете. Что вы будете делать?",
    answers: [
      {
        id: 1,
        answer:
          "Буду явно демонстрировать, что у меня больше нет настроения. Нужно сделать всё возможное, чтобы задушить Яниса в этой игре.",
        comment: "Из-за этого я перестал играть в колонизаторов, кстати.",
        isCorrect: true
      },
      {
        id: 2,
        answer:
          "Победа — не главное. Главное — это то, что мы с друзьями смогли собраться вместе и лампово поиграть в игры",
        comment:
          "Я бы хотел поиграть с вами в настолки, потому что видимо, вы неплохой человек.",
        isCorrect: true
      }
    ]
  },
  {
    id: 6,
    question:
      "На вечеринке вас знакомят с человеком. В процессе выясняется, что он зарабатывает значительно меньше вас. Что вы чувствуете?",
    answers: [
      {
        id: 1,
        answer:
          "Он хочет втереться ко мне в доверие, чтобы обмануть меня и украсть мои ресурсы",
        comment: "Именно так. Кстати, это тоже бэдтрип, но уже не от кислоты.",
        isCorrect: true
      },
      {
        id: 2,
        answer:
          "Ничего страшного, ведь уровень зарплаты не делает его плохим человеком со скрытыми мотивами",
        comment: "Очень наивно. Возможно, вас УЖЕ обобрали.",
        isCorrect: false
      }
    ]
  },
  {
    id: 7,
    question:
      "Вы видите, что позиция Яниса отлична от вашей и думаете, что нужно с ним поспорить. Станете ли вы это делать?",
    answers: [
      {
        id: 1,
        answer:
          "Да, ведь у меня неплохая аргументация и его позиция не кажется устойчивой",
        comment: "ДИТЯ, ТЫ БРОСАЕШЬ ВЫЗОВ МНЕ?",
        isCorrect: false
      },
      {
        id: 2,
        answer:
          "Нет, это было бы иррационально, ведь я ни разу не выиграл в споре с ним и статистически он почти всегда оказывается прав",
        comment: "Всё верно, с Янисом спорить не стоит.",
        isCorrect: true
      }
    ]
  },
  {
    id: 8,
    question: "Вы знакомитесь с милой девушкой. В общении вы:",
    answers: [
      {
        id: 1,
        answer:
          "Стараюсь быть лёгким и понятным, чередую интересные ей и мне темы, но стараюсь найти нечто общее",
        comment: "Всё в порядке, скорее всего вы нормальный человек.",
        isCorrect: false
      },
      {
        id: 2,
        answer:
          "Использую слова, значение которых известно только мне, термины, англицизмы и явно показываю, что я билингв, because sometimes I just wanna use english for no reason",
        comment: "Фанзиль, ты единственный, кто мог нажать на этот ответ.",
        isCorrect: true
      }
    ]
  },
  {
    id: 9,
    question:
      "Вы играете по сети в ЧГК со старыми друзьями из универа. Вам весело и нет никаких поводов думать о плохом. Что вы решаете сделать в этот момент?",
    answers: [
      {
        id: 1,
        answer:
          "Предложу продолжить общение и поиграть во что-нибудь ещё после этой партии",
        comment:
          "Ответ верный для нормального человека. Как жаль, что тест не об этом.",
        isCorrect: true
      },
      {
        id: 2,
        answer:
          "Начну рандомно говорить токсичные вещи каждому из участников разговора",
        comment:
          "Поразительно, но именно так и поступил фанзиль прямо в момент, пока я работал над этим тестом.",
        isCorrect: false
      }
    ]
  },
  {
    id: 10,
    question: "В детстве у вас был телефон, но не было",
    answers: [
      {
        id: 1,
        answer: "Друзей",
        comment:
          "Пожалуйста, можно мне вас обнять? В любом случае, вы не одиноки.",
        isCorrect: true
      },
      {
        id: 2,
        answer: "Компьютера",
        comment: "Компьютер у фанзиля был, как и фанфики по мультику с пони.",
        isCorrect: false
      }
    ]
  }
];

function Home() {
  const [counter, increment] = React.useState(0);
  const [correctAnswers, incrementCorrectAnswers] = React.useState(0);
  const [state, setState] = React.useState(null);

  useEffect(() => {
    if (counter === 10) {
      setState("finished");
    }
  }, [counter]);

  return (
    <Container>
      <Title>Вы Фанзиль?</Title>
      <Wrapper>
        <Row>
          <Paragraph>
            «Вы Фанзиль?» — это универсальный психологический тест на
            определение того, насколько вы похожи на фанзиля, титана
            современности, известного своей тревожностью, токсичностью и любовью
            к аниме. Результат теста небинарный — вы можете оказаться кем-то
            очень похожим на фанзиля, или же, если вы{" "}
            <Text strong>нормальный</Text> человек, совсем на него не похожим.
          </Paragraph>
          <Paragraph>
            Что делать с результатами теста — дело ваше. Поскольку я, гениальный
            создатель этого теста, — ваш союзник, то по его результатам я
            оставлю совет, как лучше всего интерпретировать результаты и что
            делать дальше.
          </Paragraph>
        </Row>

        {state === null && (
          <Row>
            <Button type='primary' onClick={() => setState("started")}>
              Поехали
            </Button>
          </Row>
        )}

        {state !== null && (
          <Row>
            {data.map(item => (
              <Question
                key={item.id}
                {...item}
                counter={counter}
                updateCounter={increment}
                correctAnswers={correctAnswers}
                updateCorrectCounter={incrementCorrectAnswers}
              />
            ))}
          </Row>
        )}
      </Wrapper>
      <Divider />
      {state === "finished" && <Card result={correctAnswers} />}
    </Container>
  );
}

const Container = styled.main`
  margin: 0 auto;
  padding: 64px 32px 0;
  max-width: 1024px;
  width: 100%;
`;

const Wrapper = styled.div``;

export default Home;