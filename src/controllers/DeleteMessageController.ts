import { Request, Response } from "express";
import { DeleteMessageService } from "../services/DeleteMessageService";

class DeleteMessageController{
    async handle(request: Request, response: Response){
        const { id } = request.body;

        const deleteMessageService = new DeleteMessageService();

        const result = await deleteMessageService.execute(id);

        return response.json(result);
    }
}

export { DeleteMessageController }