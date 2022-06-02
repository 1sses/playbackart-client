import { CloseBold, Plus, Select, VideoPause, VideoPlay } from '@element-plus/icons-vue'

export const statuses = [
  {
    title: 'Смотрю',
    icon: VideoPlay,
    value: 'looking',
    color: '#79bbff'
  },
  {
    title: 'Запланировано',
    icon: Plus,
    value: 'planned',
    color: '#f7b954'
  },
  {
    title: 'Просмотрено',
    icon: Select,
    value: 'viewed',
    color: '#95d475'
  },
  {
    title: 'Отложено',
    icon: VideoPause,
    value: 'postponed',
    color: '#b1b3b8'
  },
  {
    title: 'Брошено',
    icon: CloseBold,
    value: 'abandoned',
    color: '#f56c6c'
  }
]

export const rating = {
  texts: ['Хуже некуда', 'Ужасно', 'Очень плохо', 'Плохо', 'Более-менее',
    'Нормально', 'Хорошо', 'Отлично', 'Великолепно', 'Эпик вин!'],
  colors: {
    1: '#f56c6c',
    2: '#f1755f',
    3: '#ed8153',
    4: '#e99047',
    5: '#e6a23c',
    6: '#dec03b',
    7: '#d2d73b',
    8: '#add03b',
    9: '#89c93a',
    10: '#67c23a'
  }
}

export const types = [
  {
    value: 'movie',
    path: '/movies',
    title: 'Фильм'
  },
  {
    value: 'series',
    path: '/series',
    title: 'Сериал'
  },
  {
    value: 'game',
    path: '/games',
    title: 'Игра'
  },
  {
    value: 'book',
    path: '/books',
    title: 'Книга'
  }
]

export const restrictions = ['G', 'PG', 'PG-13', 'R-17', 'R+']

export const rules = {
  name: [
    { required: true, message: 'Пожалуйста, введите название', trigger: 'blur' }
  ],
  status: [
    { required: true, message: 'Пожалуйста, выберите статус', trigger: 'change' }
  ],
  type: [
    { required: true, message: 'Пожалуйста, выберите тип', trigger: 'change' }
  ]
}