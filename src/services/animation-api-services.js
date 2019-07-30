import config from '../config.js'

const AnimationApiService = {
  getAnimations() {
    return fetch(`${config.API_ENDPOINT}/animations`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getGrid() {
    return fetch(`${config.API_ENDPOINT}/grid`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getById(id) {
    return fetch(`${config.API_ENDPOINT}/animations/${id}`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  saveAnimation(lottieColor, scaleStrokeDuration) {
    return fetch(`${config.API_ENDPOINT}/animations`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      },
      body: JSON.stringify({
        color: lottieColor,
        scaleStrokeDuration: scaleStrokeDuration
      })
    })
    .then(res => {
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default AnimationApiService
