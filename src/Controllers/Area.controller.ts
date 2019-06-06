import {Body, Controller, Get, HttpStatus, Post, Put, Res, UsePipes, ValidationPipe} from "@nestjs/common";
import {AreaService} from "../Services/Area.service";
import {AreaModel} from "../Models/Area.model";
import {Response} from "express";
import {CreateAreaRequestDto} from "../Dto/create-area-request.dto";
import {CreateAreaResponseDto} from "../Dto/create-area-response.dto";
import {UpdateAreaRequestDto} from "../Dto/update-area-request.dto";
import {UpdateAreaResponseDto} from "../Dto/update-area-response.dto";

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
                title: areaModel.title,
                description: areaModel.description,

        }
            return res.status(HttpStatus.CREATED).send({area: createAreaResponse})

        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'something wrong'})
        }
    }


    // need to check wather it works!!
    @Put('createArea')
    async updateArea(@Body() areaDto: UpdateAreaRequestDto , @Res() res: Response) {
        try {

            const areaModel: UpdateAreaRequestDto = await this.areaService.updateArea(areaDto);

            const updatedeArea: UpdateAreaResponseDto = {
                title: areaModel.title,
                description: areaModel.description
            }

            return res.status(HttpStatus.OK).send({area: updatedeArea})

        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'could not update area'})
        }
    }
}
