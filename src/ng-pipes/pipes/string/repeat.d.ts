import { PipeTransform } from '@angular/core';
export declare class RepeatPipe implements PipeTransform {
    transform(str: string, n?: number, separator?: string): string;
    private repeat;
}
