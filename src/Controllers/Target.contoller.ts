import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Post, Put, Res} from "@nestjs/common";
import {Response} from 'express'
import {AreaModel} from "../Models/Area.model";
import {CreateAreaResponseDto} from "../Dto/create-area-response.dto";
import {CreateTargetRequestDto} from "../Dto/Create-target-request";
import {TargetService} from "../Services/Target.service";



@Controller()
export class TargetController {
    constructor(private readonly targetService: TargetService) {
    }

    @Post()
    async createTarget(@Body() areaDto: CreateTargetRequestDto, @Res() res: Response) {
        try {
            const areaModel: AreaModel = await this.targetService.createTarget(areaDto);
            const createAreaResponse: CreateAreaResponseDto = {
                title: areaModel.title,
                description: areaModel.description,

            }
            return res.status(HttpStatus.CREATED).send({area: createAreaResponse})

        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'something wrong'})
        }
    }


    @Put()
    UpdateTarget() {
    }

    @Delete()
    deleteTarget() {
    }

    @Get()
    getAllTargets(@Res() res: Response) {
        this.targetService.getAllTargets().then((targets) => {
            return res.status(HttpStatus.OK).send({res: targets})
        }).catch(error => {
            return res.status(HttpStatus.BAD_REQUEST).send({error: error})
        })
    }
}