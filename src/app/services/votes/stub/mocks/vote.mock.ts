import {VoteDtoInterface} from "../../dto/vote.dto";
import {voutersMock} from "./voters.mock";

export const voteMock: VoteDtoInterface = {
  id: 675845,
  title: 'Зарплатный проект',
  description: 'Несколько компаний подали ' +
  'заявки на перевод зарплат через наш банк: Лукойл, Газпром Нефть, Ростелеком.',
  deadline: '2019-12-31-00:00z',
  questions: [
    {
      id: 43,
      text: 'одобряем Лукойл?'
    },
    {
      id: 44,
      text: 'одобряем Газпром Нефть?'
    },
    {
      id: 45,
      text: 'одобряем Ростелеком?'
    }
  ],
  createdBy: {
    id: 584635,
    firstName: 'Анна',
    lastName: 'Сергеева',
    middleName: 'Александрова',
    position: 'Hr',
    subdivision: {
      id: 83456,
      name: 'Отдел кадров',
    }
  },
  voters: voutersMock,
  documentsLinks: null,
};
