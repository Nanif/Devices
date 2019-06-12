import {Interface} from "readline";

export interface JwtPayload {
    role: string[],
    permissions: string[],
}