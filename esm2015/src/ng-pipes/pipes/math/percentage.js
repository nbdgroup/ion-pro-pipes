import { Pipe } from '@angular/core';
export class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
}
PercentagePipe.decorators = [
    { type: Pipe, args: [{ name: 'percentage' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyY2VudGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9uZy1waXBlcy9waXBlcy9tYXRoL3BlcmNlbnRhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFHcEQsTUFBTSxPQUFPLGNBQWM7SUFJekIsU0FBUyxDQUFDLEdBQVEsRUFBRSxRQUFnQixHQUFHLEVBQUUsUUFBaUIsS0FBSztRQUM3RCxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNkLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFcEMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDOzs7WUFiRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncGVyY2VudGFnZScgfSlcclxuZXhwb3J0IGNsYXNzIFBlcmNlbnRhZ2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKG51bTogbnVtYmVyLCB0b3RhbD86IG51bWJlciwgZmxvb3I/OiBib29sZWFuKTogbnVtYmVyO1xyXG4gIHRyYW5zZm9ybTxUPihudW06IFQsIHRvdGFsPzogbnVtYmVyLCBmbG9vcj86IGJvb2xlYW4pOiBUO1xyXG5cclxuICB0cmFuc2Zvcm0obnVtOiBhbnksIHRvdGFsOiBudW1iZXIgPSAxMDAsIGZsb29yOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG4gICAgaWYgKGlzTmFOKG51bSkpIHtcclxuICAgICAgcmV0dXJuIG51bTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwZXJjZW50ID0gKG51bSAqIDEwMCkgLyB0b3RhbDtcclxuXHJcbiAgICByZXR1cm4gZmxvb3IgPyBNYXRoLmZsb29yKHBlcmNlbnQpIDogcGVyY2VudDtcclxuICB9XHJcbn1cclxuIl19