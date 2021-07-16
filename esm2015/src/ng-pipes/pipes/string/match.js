import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
}
MatchPipe.decorators = [
    { type: Pipe, args: [{ name: 'match' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbmctcGlwZXMvcGlwZXMvc3RyaW5nL21hdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sU0FBUztJQUlwQixTQUFTLENBQUMsSUFBUyxFQUFFLE9BQWUsRUFBRSxLQUFjO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFYRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdtYXRjaCcgfSlcclxuZXhwb3J0IGNsYXNzIE1hdGNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh0ZXh0OiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZywgZmxhZ3M/OiBzdHJpbmcpOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbDtcclxuICB0cmFuc2Zvcm08VD4odGV4dDogVCwgcGF0dGVybjogc3RyaW5nLCBmbGFncz86IHN0cmluZyk6IFQ7XHJcblxyXG4gIHRyYW5zZm9ybSh0ZXh0OiBhbnksIHBhdHRlcm46IHN0cmluZywgZmxhZ3M/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKCFpc1N0cmluZyh0ZXh0KSkge1xyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGV4dC5tYXRjaChuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==