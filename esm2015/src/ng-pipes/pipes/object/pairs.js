import { Pipe } from '@angular/core';
import { isObject } from '../helpers/helpers';
export class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
}
PairsPipe.decorators = [
    { type: Pipe, args: [{ name: 'pairs' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFpcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvb2JqZWN0L3BhaXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sU0FBUztJQUNwQixTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUVELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdwYWlycycgfSlcclxuZXhwb3J0IGNsYXNzIFBhaXJzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShvYmo6IGFueSk6IGFueVtdIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikgfHwgIWlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKTtcclxuICB9XHJcbn1cclxuIl19