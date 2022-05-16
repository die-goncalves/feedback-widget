import Bug from '../assets/Bug.svg'
import Thought from '../assets/Thought.svg'
import Idea from '../assets/Idea.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: Bug,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: Idea,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: Thought,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes
