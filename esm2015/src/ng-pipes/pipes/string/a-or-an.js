import { Pipe } from '@angular/core';
import { isVowel } from '../helpers/helpers';
/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
export class AorAnPipe {
    constructor() {
        this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a',
        };
    }
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
}
AorAnPipe.decorators = [
    { type: Pipe, args: [{
                name: 'aOrAn',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS1vci1hbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9zdHJpbmcvYS1vci1hbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLN0M7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sU0FBUztJQVR0QjtRQVVVLGlCQUFZLEdBQVE7WUFDMUIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1lBQ1QsT0FBTyxFQUFFLElBQUk7WUFDYixPQUFPLEVBQUUsR0FBRztTQUNiLENBQUM7SUFhSixDQUFDO0lBWkMsU0FBUyxDQUFDLFlBQW9CO1FBQzVCLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxLQUFLLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTCxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRCxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksRUFBRSxDQUFDO2FBQzlFO1NBQ0Y7SUFDSCxDQUFDOzs7WUEvQkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzVm93ZWwgfSBmcm9tICcuLi9oZWxwZXJzL2hlbHBlcnMnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdhT3JBbicsXHJcbn0pXHJcbi8qKlxyXG4gKiBUYWtlcyBhIHN0cmluZyBhbmQgcmV0dXJucyB0aGUgc3RyaW5nIHByZXBlbmRlZCBieSAnYScgb3IgJ2FuJy5cclxuICogVXNlcyBib3RoIG5haXZlIGFuZCBob2xkb3V0LWxpc3QgYXBwcm9hY2hlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdFbnRpdHkgLSBFbnRpdHkgdG8gcHJlcGVuZCAnYScgb3IgJ2FuJyB0by5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBb3JBblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBwcml2YXRlIGlycmVndWxhck1hcDogYW55ID0ge1xyXG4gICAgaGVyYjogJ2FuJyxcclxuICAgIGhvbm9yOiAnYW4nLFxyXG4gICAgaG9ub3JhYmxlOiAnYW4nLFxyXG4gICAgaG91cjogJ2FuJyxcclxuICAgIG1iYTogJ2FuJyxcclxuICAgIG1zYzogJ2FuJyxcclxuICAgICdtLnNjLic6ICdhbicsXHJcbiAgICB1bmljb3JuOiAnYScsXHJcbiAgfTtcclxuICB0cmFuc2Zvcm0oc3RyaW5nRW50aXR5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFzdHJpbmdFbnRpdHkgfHwgc3RyaW5nRW50aXR5ID09PSAnJykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaXJzdFdvcmQgPSBzdHJpbmdFbnRpdHkudHJpbSgpLnNwbGl0KCcgJylbMF07XHJcbiAgICAgIGlmICh0aGlzLmlycmVndWxhck1hcFtmaXJzdFdvcmQudG9Mb2NhbGVMb3dlckNhc2UoKV0pIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5pcnJlZ3VsYXJNYXBbZmlyc3RXb3JkLnRvTG9jYWxlTG93ZXJDYXNlKCldfSAke3N0cmluZ0VudGl0eX1gO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBpc1Zvd2VsKHN0cmluZ0VudGl0eVswXSkgPyBgYW4gJHtzdHJpbmdFbnRpdHl9YCA6IGBhICR7c3RyaW5nRW50aXR5fWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19