import { PipeTransform } from '@angular/core';
export declare class GroupByPipe implements PipeTransform {
    transform(input: any, discriminator?: any, delimiter?: string): any;
    private groupBy;
    private extractKeyByDiscriminator;
}
