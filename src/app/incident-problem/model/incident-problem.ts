export interface IncidentProblem {
  _id: number,
  title: string,
  description: string,
  status: number,
  type: string,
  place: string,
  damage: number,
  creation: Date,
  update: Date,
  part: number,
  vehicle: number,
  user:number,
  nonCompliance:number
}
