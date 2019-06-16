import {Inject, Injectable} from "@nestjs/common";
import {Target} from "../DB/Entities/Target.entity";
import {Area} from "../DB/Entities/Area.entity";
import {AreaModel} from "../Models/Area.model";

@Injectable()
export class TargetDao {
    constructor(@Inject('Targets_REPOSITORY') private readonly Targets_REPOSITORY: typeof Target) {
    }

    async createArea(target: AreaModel): Promise<Target> {
        return new Promise<Target>(async (resolve, reject) => {
            try {
                let targetEntity = await this.Targets_REPOSITORY.create(target);
                await targetEntity.save();
                resolve(targetEntity)
            } catch (e) {
                reject(e)
            }
        })
    }



    async getAllTargets(): Promise<Target[]> {
        return new Promise(async (resolve, reject) => {
            try {
                const targets = await this.Targets_REPOSITORY.findAll();

                if (targets) {
                    resolve(targets);
                } else {
                    resolve(null)
                }
            } catch (e) {
                reject(e)
            }
        })
    }

}