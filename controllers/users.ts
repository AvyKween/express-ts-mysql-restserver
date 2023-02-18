import { Request, Response } from "express";
import User from '../models/user';

export const getUsers = async(_req: Request, res: Response) => {

    const users = await User.findAll();

    res.status(200).json(users)
}

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findByPk(id);

    if( !user ) {
        return res.status(404).json({
            msg: `User with id: ${id} does not exist`
        })
    }

    res.status(200).json(user)
}

export const postUser = async(req: Request, res: Response) => {

    const { body } = req;

    try {
        const emailExists = await User.findOne({
            where: {
                email: body.email
            }
        })

        if ( emailExists ) {
            return res.status(400).json({
                msg: `An user with email: ${ body.email } already exists`
            })
        }

        const user = User.build(body);
        await user.save();

        res.json({
            msg: 'User created',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Check console to see the error'
        })        
    }
}

export const updateUser = async(req: Request, res: Response) => {

    const { body } = req;
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if ( !user ) {
            return res.status(404).json({
                msg: `Does not exist user with id: ${id}`
            })
        }

        // await user.update( body )
        await user.update({
            name: body.name,
            email: body.email
        })

        res.status(200).json({
            msg: 'User updated',
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Check console to see the error'
        })  
    }
}

export const deleteUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);
    if ( !user ) {
        return res.status(404).json({
            msg: `Does not exist user with id: ${id}`
        })
    }

    await user.destroy();

    res.status(200).json({
        msg: 'User deleted',
        user
    })

}