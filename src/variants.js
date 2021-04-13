const stagger = {
  show: {
    transition: {
      staggerChildren: .075,
    }
  }
}

const down = {
  hidden: { 
    opacity: 0,
    y: -200
   },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
    }
  },
}

const up = {
  hidden: { 
    opacity: 0,
    y: -100
   },
  show: { 
    opacity: 1,
    y: 0
  }
}

const slowUp = {
  hidden: { 
    opacity: 0,
    y: 100
   },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: .5,
    }
  }
}

export { stagger, down, up, slowUp }