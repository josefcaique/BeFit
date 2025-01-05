import pool from '../db';
import { ResultSetHeader } from 'mysql2/promise';


export const getTournamentId = async (id: number) => {
    const [rows] = await pool.query("SELECT * FROM tournament where id = ?", [id]);
    return rows;
}

export const addTournament = async (name: string, maxPlayersAllowed: number) => {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO tournament (name, maxPlayersAllowed) VALUES (?, ?)',
      [name, maxPlayersAllowed]
    );
  
    const newTournamentId = result.insertId;
    const [newTournament] = await pool.query('SELECT * FROM tournament WHERE id = ?', [
        newTournamentId,
    ]);
  
    return newTournament;
};