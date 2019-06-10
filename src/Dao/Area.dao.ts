import {Inject, Injectable} from "@nestjs/common";
import {Area} from "../DB/Entities/Area.entity";
import {AreaModel} from "../Models/Area.model";
import {Camera} from "../DB/Entities/Camera.entity";
import {Radar} from "../DB/Entities/Radar.entity";

@Injectable()
export class AreaDao {
    constructor(
        @Inject('Areas_REPOSITORY') private readonly Areas_REPOSITORY: typeof Area,
        @Inject('Cameras_REPOSITORY') private readonly Cameras_REPOSITORY: typeof Camera,
        @Inject('Radars_REPOSITORY') private readonly Radars_REPOSITORY: typeof Radar,
    ) {
    }

    async getAllAreas(): Promise<Area[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let areas = await this.Areas_REPOSITORY.findAll()
                resolve(areas)
            } catch (e) {
                reject(e)
            }
        })
    }

    async createArea(area: AreaModel): Promise<Area> {
        return new Promise<Area>(async (resolve, reject) => {
            const cameras = area.cameras;
            const radars = area.radars;
            try {
                delete area.radars;
                delete area.cameras;
                let areaEntity = await this.Areas_REPOSITORY.create(area);
                if (cameras && cameras.length > 0) {
                    cameras.forEach(async (cameraModel) => {
                        const camera = await this.Cameras_REPOSITORY.create(cameraModel);
                        await areaEntity.addCamera(camera);
                    })
                }
                if (radars && radars.length > 0) {
                    radars.forEach(async (radarModel) => {
                        const radar = await this.Radars_REPOSITORY.create(radarModel);
                        await areaEntity.addRadar(radar);
                    })
                }
                await areaEntity.save();
                resolve(areaEntity)
            } catch (e) {
                reject(e)
            }
        })
    }

    async updateArea(area: AreaModel): Promise<Area> {

        // why dont work ?????

        return new Promise<Area>(async (resolve, reject) => {
            try {
                this.Areas_REPOSITORY.update({
                        title: area.title,
                        description: area.description,
                        radars: area.radars,
                        cameras: area.cameras,
                        geoJson: area.geoJson
                    },{where: {id: area.id} }
                ).then(result => {
                    console.log('resullttttttttttttttttt')
                    if (result) {
                        resolve()
                    }
                }).catch(error => {
                    console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooo', error)
                    reject(error)
                })
            } catch (e) {
                console.log('second catch', e)
                reject(e)
            }
        })
    }

    async deleteArea(area: AreaModel): Promise<Area> {
        return new Promise<Area>(async (resolve, reject) => {
            try {
                this.Areas_REPOSITORY.destroy({
                             where: {id: area.id}
                    }).then(result => {
                    console.log('resullttttttttttttttttt')
                    if (result) {
                        resolve()
                    }
                }).catch(error => {
                    console.log('oooooooooooooooooooooooooooooooooooooooooooooooooooo', error)
                    reject(error)
                })
            } catch (e) {
                console.log('second catch', e)
                reject(e)
            }
        })
    }
}
