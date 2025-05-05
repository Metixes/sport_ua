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
        const { data } = await axios.get(import.meta.env.VITE_APP_API_URL + 'teams')

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
