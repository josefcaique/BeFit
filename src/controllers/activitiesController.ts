import { Request, Response } from "express";
import { getActivities, addActivity } from "../models/activitiesModule";

export const getAllActivities = async(req: Request, res: Response) => {
    try {
        const activities = await getActivities();
        res.json(activities);
    } catch(error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
};

export const createActivity = async(req: Request, res: Response) => {
    const { category, type, points } = req.body;
    try {
        const newActivite = addActivity(category, type, points);
        res.status(201).json(newActivite);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar usuário', error });
    }
}