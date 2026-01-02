import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.9peCaq-4y5rPgjiLdzsxoqGA7Whq2-uw2_Gvc2m9O2c96NJQM-cqVdZRnUba',
  },
})
