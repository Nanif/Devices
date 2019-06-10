import {Controller, Delete, Get, HttpCode, HttpStatus, Inject, Post, Put, Res} from "@nestjs/common";
import {TargetService} from "../Services/Target.service";
import {Response} from 'express'
@Controller()
export class TargetContoller {
    constructor(private readonly targetService: TargetService) {}
    @Post()
    createTarget() {}

    @Put()
    UpdateTarget() {}

    @Delete()
    deleteTarget() {}

    @Get()
    getAllTargets(@Res() res: Response) {
        this.targetService.getAllTargets().then((targets)=>{
            return res.status(HttpStatus.OK).send({res: targets})
        }).catch(error => {
            return res.status(HttpStatus.BAD_REQUEST).send({error: error})
        })
    }
}