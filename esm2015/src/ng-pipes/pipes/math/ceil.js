import { Pipe } from '@angular/core';
export class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
}
CeilPipe.decorators = [
    { type: Pipe, args: [{ name: 'ceil' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9tYXRoL2NlaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsU0FBUyxDQUFDLEdBQVcsRUFBRSxZQUFvQixDQUFDO1FBQzFDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFFRCxNQUFNLEdBQUcsR0FBRyxTQUFBLEVBQUUsRUFBSSxTQUFTLENBQUEsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxDQUFDOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAnY2VpbCcgfSlcclxuZXhwb3J0IGNsYXNzIENlaWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xyXG4gICAgaWYgKHByZWNpc2lvbiA8PSAwKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aG8gPSAxMCAqKiBwcmVjaXNpb247XHJcblxyXG4gICAgcmV0dXJuIE1hdGguY2VpbChudW0gKiB0aG8pIC8gdGhvO1xyXG4gIH1cclxufVxyXG4iXX0=