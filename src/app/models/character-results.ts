
import { Character } from "./characters";

export interface CharacterResults {
    info: {
        count:number;
        pagers:number;
        next:string;
        prev:string;
    };

    results:Character[];
}