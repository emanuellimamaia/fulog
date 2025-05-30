require('dotenv').config();
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRY_SECONDS = 3600;
export const API_PREFIX = '/api';

export enum LogProgress {
  InProgress = 'Em progresso',
  Completed = 'Completo',
  Cancelled = 'Cancelado'
}
export enum VehicleAvailability {
  Available = 'Disponível',
  Unavailable = 'Indisponível'
}