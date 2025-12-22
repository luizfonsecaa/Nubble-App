import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer Mw.uZQSgG0QMDfxgYuyWQ1gl4U0a20_SvxlH9tQhSDQI42IofKfEIi40biHn1Ln',
  },
})
