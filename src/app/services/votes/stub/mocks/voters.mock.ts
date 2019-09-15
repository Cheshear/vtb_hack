import {UserDtoInterface} from "../../dto/voter.dto";

export const voutersMock: UserDtoInterface[] = [
  {
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
  {
    id: 527669,
    firstName: 'Иван',
    lastName: 'Алексеев',
    middleName: 'Алексеевич',
    position: 'Бугалтер',
    subdivision: {
      id: 2475,
      name: 'бугалтерия',
    },
  },
  {
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
];
