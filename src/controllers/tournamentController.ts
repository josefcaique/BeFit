import { Request, Response } from "express";
import { getTournamentId, addTournament } from "../models/tournamentModule";

export const getTournament = async(req: Request, res: Response) => {
    const { id } = req.body;
    try {
        const tournament = await getTournamentId(id);
        res.json(tournament);
    } catch(error) {
        res.status(500).json({ message: 'Nao foi possivel achar esse torneio', error });
    }
};

export const createTournament = async(req: Request, res: Response) => {
    const { name } = req.body;
    let {maxPlayersAllowed} = req.body;
    if (maxPlayersAllowed){
        maxPlayersAllowed = 99;
    }

    try {
        const newTournament = addTournament(name, maxPlayersAllowed);
        res.status(201).json(newTournament);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar novo torneio', error });
    }
}