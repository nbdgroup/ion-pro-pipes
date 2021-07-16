import { Pipe } from '@angular/core';
import { isNumberFinite } from '../helpers/helpers';
export class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
}
DegreesPipe.decorators = [
    { type: Pipe, args: [{ name: 'degrees' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVncmVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9tYXRoL2RlZ3JlZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdkZWdyZWVzJyB9KVxyXG5leHBvcnQgY2xhc3MgRGVncmVlc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0ocmFkaWFuczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICghaXNOdW1iZXJGaW5pdGUocmFkaWFucykpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHJhZGlhbnMgKiAxODApIC8gTWF0aC5QSTtcclxuICB9XHJcbn1cclxuIl19