import { PipeTransform } from '@angular/core';
export declare class SqrtPipe implements PipeTransform {
    transform(num: number): number;
    transform<T>(num: T): T;
}
