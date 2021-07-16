import { Pipe } from '@angular/core';
import { isNumberFinite } from '../helpers/helpers';
export class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
}
RadiansPipe.decorators = [
    { type: Pipe, args: [{ name: 'radians' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9tYXRoL3JhZGlhbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BELE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQyxDQUFDOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc051bWJlckZpbml0ZSB9IGZyb20gJy4uL2hlbHBlcnMvaGVscGVycyc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyYWRpYW5zJyB9KVxyXG5leHBvcnQgY2xhc3MgUmFkaWFuc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0oZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICghaXNOdW1iZXJGaW5pdGUoZGVncmVlcykpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcclxuICB9XHJcbn1cclxuIl19