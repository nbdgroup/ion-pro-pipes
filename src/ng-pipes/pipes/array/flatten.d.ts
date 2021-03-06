import { PipeTransform } from '@angular/core';
export declare class FlattenPipe implements PipeTransform {
    transform(input: any[], shallow?: boolean): any[];
    transform<T>(input: T, shallow?: boolean): T;
    private flatten;
}
