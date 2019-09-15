import {QuestionDetailsDtoInterface} from "../../dto/question-details.dto";

export const questionsDetailsMock: QuestionDetailsDtoInterface = {
    text: 'shfjl',
    answers: [{
      id: 5762,
      comment: 'bbbbbbbbbbbbb',
      answer: true,
      voter: {
        id: 527668,
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        position: 'Секретарь',
        subdivision: {
          id: 2475,
          name: 'бугалтерия',
        },
      },
    },
      {
          id: 5782,
          comment: null,
          answer: false,
          voter: {
            id: 527663,
            firstName: 'Алексей',
            lastName: 'Иванов',
            middleName: 'Иванович',
            position: 'Начальник',
            subdivision: {
              id: 2475,
              name: 'отдел кадров',
            },
          }
        },
      ],
      };
