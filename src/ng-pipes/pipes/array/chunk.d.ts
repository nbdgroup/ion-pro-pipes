import { PipeTransform } from '@angular/core';
export declare class ChunkPipe implements PipeTransform {
    transform(input: any, size?: number): any;
    private chunk;
}
