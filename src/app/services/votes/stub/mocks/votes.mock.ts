import {ShortVoteDtoInterface} from '../../dto/short-vote.dto';

export const votesMock: ShortVoteDtoInterface[] = [
  {
    id: 111,
    title: "Можем ли мы доверять Клоду?",
    creator: {
      id: 12,
      firstName: "Erich",
      lastName: "Remarque",
      middleName: "Maria",
      subdivision: {
        id: 3,
        name: "Literature"
      },
      position: "author",
    },
    deadline: "13.09.2019"
  },
  {
    id: 112,
    title: "Когда же это все кончится?",
    creator: {
      id: 12,
      firstName: "Светлана",
      lastName: "Иванова",
      middleName: "Владимировна",
      subdivision: {
        id: 3,
        name: "Mathimatics"
      },
      position: "author",
    },
    deadline: "13.09.2020"
  }
]
