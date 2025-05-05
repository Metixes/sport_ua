interface ITeamForm {
  form: string[]
}

export interface ITeams {
  id: number | string
  name: string
  group: string
  logo: string
  games: number
  wins: number
  draws: number
  loses: number
  scored: number
  conceded: number
  form: ITeamForm
  points: number
}

export interface INavigationLinks {
  label: string
  url: string
}
