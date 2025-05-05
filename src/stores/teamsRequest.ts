import type { ITeams } from '@/types/types'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTeamsRequest = defineStore('teamsRequest', {
  state: () => ({
    teams: [] as ITeams[],
  }),

  actions: {
    async getTeams(): Promise<void> {
      try {
        const { data } = await axios.get('https://63ee0ec0388920150dd83e3c.mockapi.io/teams')

        if (data.error) {
          console.log('ERROR', data.error)
          return
        }

        this.teams = data
      } catch (error) {
        console.log('ERROR', error)
      }
    },
  },
})
