import {Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe} from "@nestjs/common";
import {AreaService} from "../Services/Area.service";
import {AreaModel} from "../Models/Area.model";
import {Response} from "express";
import {CreateAreaRequestDto} from "../Dto/create-area-request.dto";
import {CreateAreaResponseDto} from "../Dto/create-area-response.dto";

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) {
    }

    @Get('getAllAreas')
    async getAllAreas(@Res() res: Response) {
        console.log('get areas')
        let areas: AreaModel[] = await this.areaService.getAllAreas();
        return res.status(HttpStatus.OK).send({areas: areas})
    }

    @Post('createArea')
    async createArea(@Body() areaDto: CreateAreaRequestDto, @Res() res: Response) {
        try {
            const areaModel: AreaModel = await this.areaService.createArea(areaDto);
            const createAreaResponse: CreateAreaResponseDto = {
                id: areaModel.id,
                title: areaModel.title,
                description: areaModel.description;
        }
            return res.status(HttpStatus.CREATED).send({area: createAreaResponse})

        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'something wrong'})
        }
        console.log('areaDto', areaDto);
    }
}
