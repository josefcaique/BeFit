import pool from '../db';
import { ResultSetHeader } from 'mysql2/promise';


export const getAllUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

export const addUser = async (name: string) => {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO users (name) VALUES (?)',
      [name]
    );
  
    const newUserId = result.insertId;
    const [newUser] = await pool.query('SELECT * FROM users WHERE id = ?', [
      newUserId,
    ]);
  
    return newUser;
};