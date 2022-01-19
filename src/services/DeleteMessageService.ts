import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagesRepository";

class DeleteMessageService {
    async execute(id: string){
        const messageRepository = getCustomRepository(MessagesRepository);

        if(!id){
            throw new Error("Por favor informe um id!")
        }

        const results = await messageRepository.delete(id)

        return results;
    }
}

export  { DeleteMessageService }