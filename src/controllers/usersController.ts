import { Request, Response } from "express";
import { getAllUsers, addUser } from "../models/userModule";

export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch(error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
};

export const createUser = async(req: Request, res: Response) => {
    const { name } = req.body;
    try {
        const newUser = addUser(name);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar usuário', error });
    }
}