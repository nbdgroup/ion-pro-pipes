import { Pipe } from '@angular/core';
import { isString } from '../helpers/helpers';
export class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
}
ReversePipe.decorators = [
    { type: Pipe, args: [{ name: 'reverse' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9hcnJheS9yZXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8sV0FBVztJQUN0QixTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixPQUFPLEtBQUs7aUJBQ1QsS0FBSyxDQUFDLEVBQUUsQ0FBQztpQkFDVCxPQUFPLEVBQUU7aUJBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2hFLENBQUM7OztZQVhGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaGVscGVycy9oZWxwZXJzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3JldmVyc2UnIH0pXHJcbmV4cG9ydCBjbGFzcyBSZXZlcnNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShpbnB1dDogYW55KTogYW55IHtcclxuICAgIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgICAgcmV0dXJuIGlucHV0XHJcbiAgICAgICAgLnNwbGl0KCcnKVxyXG4gICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpID8gaW5wdXQuc2xpY2UoKS5yZXZlcnNlKCkgOiBpbnB1dDtcclxuICB9XHJcbn1cclxuIl19