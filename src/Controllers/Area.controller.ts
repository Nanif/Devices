import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Post,
    Put,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import {AreaService} from "../Services/Area.service";
import {AreaModel} from "../Models/Area.model";
import {Response} from "express";
import {CreateAreaRequestDto} from "../Dto/create-area-request.dto";
import {CreateAreaResponseDto} from "../Dto/create-area-response.dto";
import {UpdateAreaRequestDto} from "../Dto/update-area-request.dto";
import {UpdateAreaResponseDto} from "../Dto/update-area-response.dto";
import {DeleteAreaRequestDto} from "../Dto/Delete-area-request-dto";
import {PermissionGuard} from "../Middlware/Auth.guard";

@Controller('area')
export class AreaController {
    constructor(private readonly  areaService: AreaService, ) {
    }

    @Get('getAllAreas')
    async getAllAreas(@Res() res: Response) {
        this.areaService.getAllAreas().then(areas => {
            if (areas) {
                return res.status(HttpStatus.OK).send({message: 'success'})
            }
            return res.status(HttpStatus.BAD_REQUEST).send({error:"Could not get areas"})
        }).catch(error => {
            return res.status(HttpStatus.BAD_REQUEST).send({error: error})
        });

    }

    @UseGuards(PermissionGuard)
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
    @Put('updateArea')
    async updateArea(@Body() areaDto: UpdateAreaRequestDto, @Res() res: Response) {
        try {
            const updatedAreaModel: AreaModel = await this.areaService.updateArea(areaDto);
            return res.status(HttpStatus.OK).send({area: updatedAreaModel})
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'could not update area'})
        }
    }

    @Delete('deleteArea')
    async deleteArea(@Body() areaDto: DeleteAreaRequestDto, @Res() res: Response) {
        try {
            const deletedArea: Number = await this.areaService.deleteArea(areaDto);

            return res.status(HttpStatus.OK).send({area: deletedArea})

        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send({error: 'could not update area'})
        }
    }
}
