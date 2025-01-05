import { ResultSetHeader } from 'mysql2/promise';
import pool from '../db';

export const addActivity = async (category: String, type: String, points: number) => {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO activities (category, type, points) VALUES (?, ?, ?)',
      [category, type, points]
    );
  
    return [{"message": "Created with sucess"}];
};

export const getActivities = async () => {
    const [rows] = await pool.query("SELECT * FROM activities");
    return rows;
}

 