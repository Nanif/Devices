import {Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe} from "@nestjs/common";
import {AreaService} from "../Services/Area.service";
import {AreaModel} from "../Models/Area.model";
import {Response} from "express";
import {CreateAreaDto} from "../Dto/create-area.dto";
import {Area} from "../DB/Entities/Area.entity";
import {CameraModel} from "../Models/Camera.model";

@Controller('area')
export class AreaController {
    constructor(private readonly areaService: AreaService) {
    }

    @Get('getAllAreas')
    async getAllAreas(@Res() res: Response) {

        let areas: AreaModel[] = await this.areaService.getAllAreas();
        return res.status(HttpStatus.OK).send({areas: areas})
    }

    @Post('createArea')
    async createArea(@Res() res: Response, @Body() areaDto: CreateAreaDto) {
        try {
            const cameras: CameraModel[]  = new Array(areaDto.cameras.length)  ;
            for (let i = 0; i < areaDto.cameras.length; i++) {
                let camera = new CameraModel(
                    areaDto.cameras[i].title,
                    areaDto.cameras[i].description,
                    areaDto.cameras[i].ip,
                    areaDto.cameras[i].port,
                    areaDto.cameras[i].status,
                    areaDto.cameras[i].placeId,
                    areaDto.cameras[i].areaId
                );
                cameras[i] = camera
            }
            const areaModel: AreaModel = {
                title: areaDto.title,
                description: areaDto.description,
                cameras: areaDto.cameras,
                radars: areaDto.radars,
                geoJson: areaDto.geoJson,
            };

            const area: Area = await this.areaService.createArea(areaModel);
            const areaModelResponse = AreaModel.transformFromEntityToModel(area);
            console.log(areaModelResponse);

            return res.status(HttpStatus.OK).send({area: areaModelResponse})
        } catch (e) {
            console.log(e);
        }
    }

    // @Get()
    // getAreaById(): Response {}

    //get update delete create
}